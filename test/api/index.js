'use strict';

const Lab = require('lab');
const Config = require('../../config');
const Hapi = require('hapi');
const IndexPlugin = require('../../src/api/index');

const lab = exports.lab = Lab.script();

lab.beforeEach((done) => {

    const plugins = [IndexPlugin];
    const server = new Hapi.Server();
    server.connection({ port: Config.get('/port/api') });
    server.register(plugins, (err) => {

        if (err) {
            return done(err);
        }
        done();
    });
});


lab.experiment('Index Plugin', () => {

});
