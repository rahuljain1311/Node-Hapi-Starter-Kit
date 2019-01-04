'use strict';

module.exports = {
    'local_postgres': {
        'username': process.env.POSTGRES_USER,
        'password': process.env.POSTGRES_PASSWORD,
        'database': process.env.POSTGRES_DB,
        'host': 'db',
        'dialect': 'postgres',
        seederStorage: 'sequelize',
        operatorsAliases: false
    },
    'local_mysql': {
        'username': 'root',
        'password': process.env.MYSQL_ROOT_PASSWORD,
        'database': process.env.MYSQL_DATABASE,
        'host': 'db',
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
        'database': 'article',
        'host': '127.0.0.1',
        'dialect': 'postgres',
        seederStorage: 'sequelize',
        operatorsAliases: false
    }
};
