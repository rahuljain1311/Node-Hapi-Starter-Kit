'use strict';

module.exports = {
    'local': {
        'username': 'root',
        'password': 'password',
        'database': 'article',
        'host': 'localhost',
        'dialect': 'mysql',
        seederStorage: 'sequelize',
    },
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
