const AWS = require('aws-sdk');
const metricThreshold = require('./MetricThreshold.js');
const rds = require('./queries/rds.js');

const S3 = new AWS.S3();
const cloudwatch = new AWS.CloudWatch({
  apiVersion: '2010-08-01',
  region: 'ap-southeast-1'
});


exports.handler = async (event, context) => {
  const result = await getMetricData();
  return await putObject(await transform(result.MetricDataResults));
};

const getQueries = async () => {
  return [
    ...rds
  ];
}

const getMetricData = async () => {
  let start = new Date()
  start.setMonth(start.getMonth() - 1); //prev.setMinutes(prev.getMinutes() - 5);
  start = new Date(start).getTime() / 1000;

  let end = new Date().getTime() / 1000;
  
  var params = {
    StartTime: start, 
    EndTime: end,
    MetricDataQueries: await getQueries(),
    ScanBy: 'TimestampAscending'
  };

  return await cloudwatch.getMetricData(params, function (err, data) {
    if (err) console.log(err, err.stack);
  }).promise();
}

const transform = async (metrics) => {
  const response = [];
  if(metrics) {  
    for (let m = 0; m <= metrics.length - 1; m++) {
      let label = metrics[m].Label.split('/');
      let app_name = label[0];
      let resource_name = label[1]
      let metric_name = label[3];
      let resource_arn =  label[2];
      let resource_type = resource_arn.split(':')[2];
  
      for (let x = 0, values = metrics[m].Values; x <= values.length - 1; x++) {
        let result = {
          app_name,
          resource_type,
          resource_name,
          resource_arn,
          metric_name,
          timestamp: metrics[m].Timestamps[x],
          metric_value: values[x],
          threshold: getThreshold(resource_type, metric_name, values[x])
        }
        response.push(result);
      }
    } 
  }

  return await Promise.all(response);
}

const getThreshold = (resource_type, metric_name, value) => {
  const threshold = metricThreshold[resource_type][metric_name];
  const keys = Object.keys(threshold);
  let response = 'Normal';

  if(keys.length) {
    for (let i = 0; i < keys.length; i++) {
      if(value >= threshold[keys[i]]) {
        response = keys[i];
      }
    }
  } else {
    response = '';
  }
  return response;
}

const formatDate = (date) => {
  var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
}

const putObject = async (logs) => {
  const now = new Date;
  const key = `cloudwatch-metrics/${formatDate(now)}-${now.getTime()}.json`;
  let params = {
      Body: JSON.stringify(logs), 
      Bucket: process.env.bucket, 
      Key: key, 
      ServerSideEncryption: "AES256"
  };

  return await S3.putObject(params, async function(err, data) {
      if (err) console.log(err, err.stack); // an error occurred
      else {
        return data;
      }   
  }).promise();
};