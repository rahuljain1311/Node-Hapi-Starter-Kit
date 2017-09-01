'use strict';

const Confidence = require('confidence');
const GoodConsole = require('good-console');
const Pack = require('./package');

const criteria = {
    env: process.env.NODE_ENV
};

const config = {
    $meta: 'This file configures the plot device.',
    projectName: 'Node-Hapi-Starter-Kit',
    port: {
        api: {
            $filter: 'env',
            local: 5000,
            $default: 5000
        }
    },
    logging: {
        $filter: 'env',
        local: {
            reporters: [{
                reporter: GoodConsole,
                events: { fatal: '*', request: '*', response: '*',  error: '*', info: '*', log: '*', debug: '*' }
            }]
        },
        $default: {
            reporters: [{
                reporter: GoodConsole,
                events: { fatal: '*', request: '*', response: '*',  error: '*', info: '*', log: '*', debug: '*' }
            }]
        }
    },
    swaggerOptions: {
        $filter: 'env',
        local: {
            info: {
                'title': 'Node-Hapi-Starter-Kit API Documentation',
                'version': Pack.version
            }
        },
        $default: {
            info: {
                'title': 'Node-Hapi-Starter-Kit API Documentation',
                'version': Pack.version
            }
        }
    }
};

const store = new Confidence.Store(config);

exports.get = function (key) {

    return store.get(key, criteria);
};

exports.meta = function (key) {

    return store.meta(key, criteria);
};
