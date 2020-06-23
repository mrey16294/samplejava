module.exports = [{
        "Id": "vmnfbdpd03_1_rds_cpuutilization",
        "Label": "NF Bus/VMNFBDPD03-1/arn:aws:rds:ap-southeast-1:587852665253:db:vmnfbdpd03-1/CPUUtilization",
        "MetricStat": {
            "Metric": {
                "Namespace": "AWS/RDS",
                "MetricName": "CPUUtilization",
                "Dimensions": [{
                    "Name": "DBInstanceIdentifier",
                    "Value": "VMNFBDPD03-1"
                }]
            },
            "Period": 300,
            "Stat": "Average",
            "Unit": "Percent"
        },
        "ReturnData": true
    },
    {
        "Id": "vmnfbdpd03_1_rds_databaseconnections",
        "Label": "NF Bus/VMNFBDPD03-1/arn:aws:rds:ap-southeast-1:587852665253:db:vmnfbdpd03-1/DatabaseConnections",
        "MetricStat": {
            "Metric": {
                "Namespace": "AWS/RDS",
                "MetricName": "DatabaseConnections",
                "Dimensions": [{
                    "Name": "DBInstanceIdentifier",
                    "Value": "VMNFBDPD03-1"
                }]
            },
            "Period": 300,
            "Stat": "Average",
            "Unit": "Count"
        },
        "ReturnData": true
    },
    {
        "Id": "vmnfbdpd03_1_rds_freeablememory",
        "Label": "NF Bus/VMNFBDPD03-1/arn:aws:rds:ap-southeast-1:587852665253:db:vmnfbdpd03-1/FreeableMemory",
        "MetricStat": {
            "Metric": {
                "Namespace": "AWS/RDS",
                "MetricName": "FreeableMemory",
                "Dimensions": [{
                    "Name": "DBInstanceIdentifier",
                    "Value": "VMNFBDPD03-1"
                }]
            },
            "Period": 300,
            "Stat": "Average",
            "Unit": "Bytes"
        },
        "ReturnData": true
    },
    {
        "Id": "vmnfbdpd03_1_rds_freestoragespace",
        "Label": "NF Bus/VMNFBDPD03-1/arn:aws:rds:ap-southeast-1:587852665253:db:vmnfbdpd03-1/FreeStorageSpace",
        "MetricStat": {
            "Metric": {
                "Namespace": "AWS/RDS",
                "MetricName": "FreeStorageSpace",
                "Dimensions": [{
                    "Name": "DBInstanceIdentifier",
                    "Value": "VMNFBDPD03-1"
                }]
            },
            "Period": 300,
            "Stat": "Average",
            "Unit": "Bytes"
        },
        "ReturnData": true
    },
    {
        "Id": "vmnfbdpd03_1_rds_swapusage",
        "Label": "NF Bus/VMNFBDPD03-1/arn:aws:rds:ap-southeast-1:587852665253:db:vmnfbdpd03-1/SwapUsage",
        "MetricStat": {
            "Metric": {
                "Namespace": "AWS/RDS",
                "MetricName": "SwapUsage",
                "Dimensions": [{
                    "Name": "DBInstanceIdentifier",
                    "Value": "sonarqubedb"
                }]
            },
            "Period": 300,
            "Stat": "Average",
            "Unit": "Bytes"
        },
        "ReturnData": true
    },
    {
        "Id": "vmnfbdpd03_1_rds_readiops",
        "Label": "NF Bus/VMNFBDPD03-1/arn:aws:rds:ap-southeast-1:587852665253:db:vmnfbdpd03-1/ReadIOPs",
        "MetricStat": {
            "Metric": {
                "Namespace": "AWS/RDS",
                "MetricName": "ReadIOPs",
                "Dimensions": [{
                    "Name": "DBInstanceIdentifier",
                    "Value": "VMNFBDPD03-1"
                }]
            },
            "Period": 300,
            "Stat": "Average",
            "Unit": "Count/Second"
        },
        "ReturnData": true
    },
    {
        "Id": "vmnfbdpd03_1_rds_writeiops",
        "Label": "NF Bus/VMNFBDPD03-1/arn:aws:rds:ap-southeast-1:587852665253:db:vmnfbdpd03-1/WriteIOPs",
        "MetricStat": {
            "Metric": {
                "Namespace": "AWS/RDS",
                "MetricName": "WriteIOPs",
                "Dimensions": [{
                    "Name": "DBInstanceIdentifier",
                    "Value": "VMNFBDPD03-1"
                }]
            },
            "Period": 300,
            "Stat": "Average",
            "Unit": "Count/Second"
        },
        "ReturnData": true
    },
    {
        "Id": "vmnfbdpd03_1_rds_readlatency",
        "Label": "NF Bus/VMNFBDPD03-1/arn:aws:rds:ap-southeast-1:587852665253:db:vmnfbdpd03-1/ReadLatency",
        "MetricStat": {
            "Metric": {
                "Namespace": "AWS/RDS",
                "MetricName": "ReadLatency",
                "Dimensions": [{
                    "Name": "DBInstanceIdentifier",
                    "Value": "VMNFBDPD03-1"
                }]
            },
            "Period": 300,
            "Stat": "Average",
            "Unit": "Seconds"
        },
        "ReturnData": true
    },
    {
        "Id": "vmnfbdpd03_1_rds_writelatency",
        "Label": "NF Bus/VMNFBDPD03-1/arn:aws:rds:ap-southeast-1:587852665253:db:vmnfbdpd03-1/WriteLatency",
        "MetricStat": {
            "Metric": {
                "Namespace": "AWS/RDS",
                "MetricName": "WriteLatency",
                "Dimensions": [{
                    "Name": "DBInstanceIdentifier",
                    "Value": "VMNFBDPD03-1"
                }]
            },
            "Period": 300,
            "Stat": "Average",
            "Unit": "Seconds"
        },
        "ReturnData": true
    },
    {
        "Id": "vmnfbdpd03_1_rds_readthroughput",
        "Label": "NF Bus/VMNFBDPD03-1/arn:aws:rds:ap-southeast-1:587852665253:db:vmnfbdpd03-1/ReadThroughput",
        "MetricStat": {
            "Metric": {
                "Namespace": "AWS/RDS",
                "MetricName": "ReadThroughput",
                "Dimensions": [{
                    "Name": "DBInstanceIdentifier",
                    "Value": "VMNFBDPD03-1"
                }]
            },
            "Period": 300,
            "Stat": "Average",
            "Unit": "Bytes/Second"
        },
        "ReturnData": true
    },
    {
        "Id": "vmnfbdpd03_1_rds_writethroughput",
        "Label": "NF Bus/VMNFBDPD03-1/arn:aws:rds:ap-southeast-1:587852665253:db:vmnfbdpd03-1/WriteThroughput",
        "MetricStat": {
            "Metric": {
                "Namespace": "AWS/RDS",
                "MetricName": "WriteThroughput",
                "Dimensions": [{
                    "Name": "DBInstanceIdentifier",
                    "Value": "VMNFBDPD03-1"
                }]
            },
            "Period": 300,
            "Stat": "Average",
            "Unit": "Bytes/Second"
        },
        "ReturnData": true
    }
]