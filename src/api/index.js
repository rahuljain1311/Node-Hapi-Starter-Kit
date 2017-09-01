'use strict';

exports.register = (server, options, next) => {

    server.route(require('./hello'));
    next();
};

exports.register.attributes = {
    name: 'api'
};
