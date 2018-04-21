'use strict';

module.exports = {
    up: function (queryInterface) {
        return queryInterface.bulkInsert('Articles', [{
            id: 1,
            description: 'You are 25x more likely to get the flu in the next 10 days',
            link: 'https://www.google.com/sms'
        }, {
            id: 2,
            description: 'Our data shows an elevated level of the flu in 8-10 year olds in Fountain Square, IN',
            link: 'https://www.google.com/email'
        }], {});
    },
    down: function (queryInterface) {
        return queryInterface.bulkDelete('Articles', null, {});
    }
};
