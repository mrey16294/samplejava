module.exports = [
  {
    "Id": "iclrdscpuutil",
    "Label": "skellig/arn:aws:rds:ap-southeast-1:703306584987:cluster:isg-logger-db/CPUUtilization",
    "MetricStat": {
      "Metric": {
        "Namespace": "AWS/RDS",
        "MetricName": "CPUUtilization",
        "Dimensions": [{
          "Name": "DBClusterIdentifier",
          "Value": "isg-logger-db"
        }]
      },
      "Period": 300,
      "Stat": "Average",
      "Unit": "Percent"
    },
    "ReturnData": true
  },
  {
    "Id": "iclrdsdbcon",
    "Label": "skellig/arn:aws:rds:ap-southeast-1:703306584987:cluster:isg-logger-db/DatabaseConnections",
    "MetricStat": {
      "Metric": {
        "Namespace": "AWS/RDS",
        "MetricName": "DatabaseConnections",
        "Dimensions": [{
          "Name": "DBClusterIdentifier",
          "Value": "isg-logger-db"
        }]
      },
      "Period": 300,
      "Stat": "Average",
      "Unit": "Percent"
    },
    "ReturnData": true
  },
  {
    "Id": "iclrdsfreemem",
    "Label": "skellig/arn:aws:rds:ap-southeast-1:703306584987:cluster:isg-logger-db/FreeableMemory",
    "MetricStat": {
      "Metric": {
        "Namespace": "AWS/RDS",
        "MetricName": "FreeableMemory",
        "Dimensions": [{
          "Name": "DBClusterIdentifier",
          "Value": "isg-logger-db"
        }]
      },
      "Period": 300,
      "Stat": "Average",
      "Unit": "Percent"
    },
    "ReturnData": true
  },
  {
    "Id": "iclrdsfreelocstorage",
    "Label": "skellig/arn:aws:rds:ap-southeast-1:703306584987:cluster:isg-logger-db/FreeLocalStorage",
    "MetricStat": {
      "Metric": {
        "Namespace": "AWS/RDS",
        "MetricName": "FreeLocalStorage",
        "Dimensions": [{
          "Name": "DBClusterIdentifier",
          "Value": "isg-logger-db"
        }]
      },
      "Period": 300,
      "Stat": "Average",
      "Unit": "Percent"
    },
    "ReturnData": true
  },
  //{
  //  "Id": "iclrds",
  //  "Label": "skellig/arn:aws:rds:ap-southeast-1:703306584987:cluster:isg-logger-db/SwapStorage",
  //  "MetricStat": {
  //    "Metric": {
  //      "Namespace": "AWS/RDS",
  //      "MetricName": "SwapStorage",
  //      "Dimensions": [{
  //        "Name": "DBClusterIdentifier",
  //        "Value": "isg-logger-db"
  //      }]
  //    },
  //    "Period": 300,
  //    "Stat": "Average",
  //    "Unit": "Percent"
  //  },
  //  "ReturnData": true
  //},
  {
    "Id": "iclrdsvolreadiops",
    "Label": "skellig/arn:aws:rds:ap-southeast-1:703306584987:cluster:isg-logger-db/VolumeReadIOPs",
    "MetricStat": {
      "Metric": {
        "Namespace": "AWS/RDS",
        "MetricName": "VolumeReadIOPs",
        "Dimensions": [{
          "Name": "DBClusterIdentifier",
          "Value": "isg-logger-db"
        }]
      },
      "Period": 300,
      "Stat": "Average",
      "Unit": "Percent"
    },
    "ReturnData": true
  },
  {
    "Id": "iclrdsvolwriteiops",
    "Label": "skellig/arn:aws:rds:ap-southeast-1:703306584987:cluster:isg-logger-db/VolumeWriteIOPs",
    "MetricStat": {
      "Metric": {
        "Namespace": "AWS/RDS",
        "MetricName": "VolumeWriteIOPs",
        "Dimensions": [{
          "Name": "DBClusterIdentifier",
          "Value": "isg-logger-db"
        }]
      },
      "Period": 300,
      "Stat": "Average",
      "Unit": "Percent"
    },
    "ReturnData": true
  },
  {
    "Id": "iclrdsreadlat",
    "Label": "skellig/arn:aws:rds:ap-southeast-1:703306584987:cluster:isg-logger-db/ReadLatency",
    "MetricStat": {
      "Metric": {
        "Namespace": "AWS/RDS",
        "MetricName": "ReadLatency",
        "Dimensions": [{
          "Name": "DBClusterIdentifier",
          "Value": "isg-logger-db"
        }]
      },
      "Period": 300,
      "Stat": "Average",
      "Unit": "Percent"
    },
    "ReturnData": true
  },
  {
    "Id": "iclrdswritelat",
    "Label": "skellig/arn:aws:rds:ap-southeast-1:703306584987:cluster:isg-logger-db/WriteLatency",
    "MetricStat": {
      "Metric": {
        "Namespace": "AWS/RDS",
        "MetricName": "WriteLatency",
        "Dimensions": [{
          "Name": "DBClusterIdentifier",
          "Value": "isg-logger-db"
        }]
      },
      "Period": 300,
      "Stat": "Average",
      "Unit": "Percent"
    },
    "ReturnData": true
  },
  {
    "Id": "iclrdsreadthruput",
    "Label": "skellig/arn:aws:rds:ap-southeast-1:703306584987:cluster:isg-logger-db/ReadThroughput",
    "MetricStat": {
      "Metric": {
        "Namespace": "AWS/RDS",
        "MetricName": "ReadThroughput",
        "Dimensions": [{
          "Name": "DBClusterIdentifier",
          "Value": "isg-logger-db"
        }]
      },
      "Period": 300,
      "Stat": "Average",
      "Unit": "Percent"
    },
    "ReturnData": true
  },
  {
    "Id": "iclrdswritethruput",
    "Label": "skellig/arn:aws:rds:ap-southeast-1:703306584987:cluster:isg-logger-db/WriteThroughput",
    "MetricStat": {
      "Metric": {
        "Namespace": "AWS/RDS",
        "MetricName": "WriteThroughput",
        "Dimensions": [{
          "Name": "DBClusterIdentifier",
          "Value": "isg-logger-db"
        }]
      },
      "Period": 300,
      "Stat": "Average",
      "Unit": "Percent"
    },
    "ReturnData": true
  }
]
