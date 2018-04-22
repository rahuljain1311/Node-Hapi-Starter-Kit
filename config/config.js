'use strict';

module.exports = {
    'local_postgres': {
        'username': process.env.POSTGRES_USER,
        'password': process.env.POSTGRES_PASSWORD,
        'database': process.env.POSTGRES_DB,
        'host': 'db',
        'dialect': 'postgres',
        seederStorage: 'sequelize',
    },
    // 'local': {
    //     'username': 'root',
    //     'password': 'password',
    //     'database': 'article',
    //     'host': 'localhost',
    //     'dialect': 'postgres',
    //     seederStorage: 'sequelize',
    // },
    'test': {
        'username': 'root',
        'password': 'password',
        'database': 'article',
        'host': '127.0.0.1',
        'dialect': 'mysql',
        seederStorage: 'sequelize',
    },
    'production': {
        'username': 'root',
        'password': 'password',
        'database': 'article',
        'host': '127.0.0.1',
        'dialect': 'postgres',
        seederStorage: 'sequelize',
    }
};
