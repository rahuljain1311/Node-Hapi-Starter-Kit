'use strict';
const fs        = require('fs');

module.exports = {
    'local_postgres': {
        'username': 'jain',
        'password': '',
        'database': 'jain',
        'host': 'rahul-postgres-read-write-instance.cfnjovscczju.us-west-2.rds.amazonaws.com',

        hostname: 'rahul-postgres-read-write-instance.cfnjovscczju.us-west-2.rds.amazonaws.com',
        region: 'us-west-2',
        port: 5432,

        'dialect': 'postgres',
        seederStorage: 'sequelize',
        operatorsAliases: false,
        dialectOptions: {
            ssl: {
                ca: fs.readFileSync("/Users/rahul_jain/Downloads/rds-combined-ca-bundle.pem")
            }
        }
    },
    'local_mysql': {
        'username': 'root',
        'password': 'rjp',
        'database': 'rj',
        'host': '127.0.0.1',
        'dialect': 'mysql',
        seederStorage: 'sequelize',
        operatorsAliases: false
    },
    'test': {
        'username': 'root',
        'password': 'password',
        'database': 'article',
        'host': '127.0.0.1',
        'dialect': 'mysql',
        seederStorage: 'sequelize',
        operatorsAliases: false
    },
    'production': {
        'username': 'root',
        'password': 'password',
        'database': 'rj',
        'host': '127.0.0.1',
        'dialect': 'postgres',
        seederStorage: 'sequelize',
        operatorsAliases: false
    }
};
