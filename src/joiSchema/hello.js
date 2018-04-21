'use strict';

const Joi = require('joi');

const main = {
    id: Joi.number().integer().min(1).max(2).required(),
    description: Joi.string().max(255).required(),
    link: Joi.string().max(255).required()
};

exports.myHelloRequest = Joi.object({
    id: main.id
});

exports.myHelloResponse = Joi.object({
    id: main.id,
    description: main.description,
    link: main.link
});
