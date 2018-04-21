'use strict';

const Confidence = require('confidence');
const Config = require('./config');
const Sequelize = require('./models/index.js').Sequelize;
const sequelize = require('./models/index.js').sequelize;

const criteria = {
    env: process.env.NODE_ENV
};

const manifest = {
    $meta: 'This file defines the plot device.',
    server: {
        debug: {
            request: ['error']
        },
        connections: {
            routes: {
                log: true
            }
        }
    },
    connections: [{
        port: Config.get('/port/api')
    }],
    registrations: [
        {
            plugin: require('./src/api/index'),
            options: {
                routes: {
                    prefix: '/api'
                }
            }
        },
        {
            plugin: {
                register: 'inert',
            }
        },
        {
            plugin: {
                register: 'vision',
            }
        },
        {
            plugin: {
                register: 'good',
                options: Config.get('/logging')
            }
        },
        {
            plugin: {
                register: 'hapi-swagger',
                options: Config.get('/swaggerOptions')
            }
        }
    ]
};


const store = new Confidence.Store(manifest);


exports.get = function (key) {

    return store.get(key, criteria);
};


exports.meta = function (key) {

    return store.meta(key, criteria);
};
