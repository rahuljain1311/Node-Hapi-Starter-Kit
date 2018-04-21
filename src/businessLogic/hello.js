'use strict';
const Model = require('../../models/index');

async function print(id){

    var data = await Model.Article.find({
        where: { id: id },
        attributes: ['id', 'link', 'description']
    });
    data = JSON.parse(JSON.stringify(data));
    return data;
}

module.exports.print = print;
