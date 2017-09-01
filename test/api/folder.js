'use strict';

const Lab = require('lab');
const Code = require('code');
const Composer = require('../../createServer');
// const Mock = require('./mockData/hello');

const api = '/api/hello/';
const lab = exports.lab = Lab.script();

const experiment = lab.experiment;
const test = lab.test;

experiment('Hello - ', () => {

    test('it tests hello api', (done) => {

        const serverOptions = {
            method: 'GET',
            url: api + '1'
        };
        Composer((err, server) => {

            if (err) {
                console.error(err);
            }
            server.inject(serverOptions, (response) => {

                Code.expect(response.statusCode).to.equal(200);
                server.stop(done);
            });
        });
    });
});
