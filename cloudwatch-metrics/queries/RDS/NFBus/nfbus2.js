module.exports = [{
    "Id": "vmnfbdpd03_2_rds_cpuutilization",
    "Label": "NF Bus/VMNFBDPD03-2/arn:aws:rds:ap-southeast-1:587852665253:db:vmnfbdpd03-2/CPUUtilization",
    "MetricStat": {
        "Metric": {
            "Namespace": "AWS/RDS",
            "MetricName": "CPUUtilization",
            "Dimensions": [{
                "Name": "DBInstanceIdentifier",
                "Value": "VMNFBDPD03-2"
            }]
        },
        "Period": 300,
        "Stat": "Average",
        "Unit": "Percent"
    },
    "ReturnData": true
},
{
    "Id": "vmnfbdpd03_2_rds_databaseconnections",
    "Label": "NF Bus/VMNFBDPD03-2/arn:aws:rds:ap-southeast-1:587852665253:db:vmnfbdpd03-2/DatabaseConnections",
    "MetricStat": {
        "Metric": {
            "Namespace": "AWS/RDS",
            "MetricName": "DatabaseConnections",
            "Dimensions": [{
                "Name": "DBInstanceIdentifier",
                "Value": "VMNFBDPD03-2"
            }]
        },
        "Period": 300,
        "Stat": "Average",
        "Unit": "Count"
    },
    "ReturnData": true
},
{
    "Id": "VMNFBDPD03-2freeablememory",
    "Label": "NF Bus/VMNFBDPD03-2/arn:aws:rds:ap-southeast-1:587852665253:db:vmnfbdpd03-2/FreeableMemory",
    "MetricStat": {
        "Metric": {
            "Namespace": "AWS/RDS",
            "MetricName": "FreeableMemory",
            "Dimensions": [{
                "Name": "DBInstanceIdentifier",
                "Value": "VMNFBDPD03-2"
            }]
        },
        "Period": 300,
        "Stat": "Average",
        "Unit": "Bytes"
    },
    "ReturnData": true
},
{
    "Id": "VMNFBDPD03-2freestoragespace",
    "Label": "NF Bus/VMNFBDPD03-2/arn:aws:rds:ap-southeast-1:587852665253:db:vmnfbdpd03-2/FreeStorageSpace",
    "MetricStat": {
        "Metric": {
            "Namespace": "AWS/RDS",
            "MetricName": "FreeStorageSpace",
            "Dimensions": [{
                "Name": "DBInstanceIdentifier",
                "Value": "VMNFBDPD03-2"
            }]
        },
        "Period": 300,
        "Stat": "Average",
        "Unit": "Bytes"
    },
    "ReturnData": true
},
{
    "Id": "VMNFBDPD03-2swapusage",
    "Label": "NF Bus/VMNFBDPD03-2/arn:aws:rds:ap-southeast-1:587852665253:db:vmnfbdpd03-2/SwapUsage",
    "MetricStat": {
        "Metric": {
            "Namespace": "AWS/RDS",
            "MetricName": "SwapUsage",
            "Dimensions": [{
                "Name": "DBInstanceIdentifier",
                "Value": "VMNFBDPD03-2"
            }]
        },
        "Period": 300,
        "Stat": "Average",
        "Unit": "Bytes"
    },
    "ReturnData": true
},
{
    "Id": "VMNFBDPD03-2readiops",
    "Label": "NF Bus/VMNFBDPD03-2/arn:aws:rds:ap-southeast-1:587852665253:db:vmnfbdpd03-2/ReadIOPs",
    "MetricStat": {
        "Metric": {
            "Namespace": "AWS/RDS",
            "MetricName": "ReadIOPs",
            "Dimensions": [{
                "Name": "DBInstanceIdentifier",
                "Value": "VMNFBDPD03-2"
            }]
        },
        "Period": 300,
        "Stat": "Average",
        "Unit": "Count/Second"
    },
    "ReturnData": true
},
{
    "Id": "VMNFBDPD03-2writeiops",
    "Label": "NF Bus/VMNFBDPD03-2/arn:aws:rds:ap-southeast-1:587852665253:db:vmnfbdpd03-2/WriteIOPs",
    "MetricStat": {
        "Metric": {
            "Namespace": "AWS/RDS",
            "MetricName": "WriteIOPs",
            "Dimensions": [{
                "Name": "DBInstanceIdentifier",
                "Value": "VMNFBDPD03-2"
            }]
        },
        "Period": 300,
        "Stat": "Average",
        "Unit": "Count/Second"
    },
    "ReturnData": true
},
{
    "Id": "VMNFBDPD03-2readlatency",
    "Label": "NF Bus/VMNFBDPD03-2/arn:aws:rds:ap-southeast-1:587852665253:db:vmnfbdpd03-2/ReadLatency",
    "MetricStat": {
        "Metric": {
            "Namespace": "AWS/RDS",
            "MetricName": "ReadLatency",
            "Dimensions": [{
                "Name": "DBInstanceIdentifier",
                "Value": "VMNFBDPD03-2"
            }]
        },
        "Period": 300,
        "Stat": "Average",
        "Unit": "Seconds"
    },
    "ReturnData": true
},
{
    "Id": "VMNFBDPD03-2writelatency",
    "Label": "NF Bus/VMNFBDPD03-2/arn:aws:rds:ap-southeast-1:587852665253:db:vmnfbdpd03-2/WriteLatency",
    "MetricStat": {
        "Metric": {
            "Namespace": "AWS/RDS",
            "MetricName": "WriteLatency",
            "Dimensions": [{
                "Name": "DBInstanceIdentifier",
                "Value": "VMNFBDPD03-2"
            }]
        },
        "Period": 300,
        "Stat": "Average",
        "Unit": "Seconds"
    },
    "ReturnData": true
},
{
    "Id": "VMNFBDPD03-2readthroughput",
    "Label": "NF Bus/VMNFBDPD03-2/arn:aws:rds:ap-southeast-1:587852665253:db:vmnfbdpd03-2/ReadThroughput",
    "MetricStat": {
        "Metric": {
            "Namespace": "AWS/RDS",
            "MetricName": "ReadThroughput",
            "Dimensions": [{
                "Name": "DBInstanceIdentifier",
                "Value": "VMNFBDPD03-2"
            }]
        },
        "Period": 300,
        "Stat": "Average",
        "Unit": "Bytes/Second"
    },
    "ReturnData": true
},
{
    "Id": "VMNFBDPD03-2writethroughput",
    "Label": "NF Bus/VMNFBDPD03-2/arn:aws:rds:ap-southeast-1:587852665253:db:vmnfbdpd03-2/WriteThroughput",
    "MetricStat": {
        "Metric": {
            "Namespace": "AWS/RDS",
            "MetricName": "WriteThroughput",
            "Dimensions": [{
                "Name": "DBInstanceIdentifier",
                "Value": "VMNFBDPD03-2"
            }]
        },
        "Period": 300,
        "Stat": "Average",
        "Unit": "Bytes/Second"
    },
    "ReturnData": true
}
]