'use strict';

const Joi = require('joi');

const main = {
    id: Joi.number().integer().min(1).required(),
    name: Joi.string().max(255).required()
};

exports.myHelloRequest = Joi.object({
    id: main.id
});

exports.myHelloResponse = Joi.object({
    id: main.id,
    name: main.name
});
