'use strict';
const Model = require('../../models/index');

function print(id){

    return Model.Article.find({
        where: { id: id },
        attributes: ['id', 'link', 'description']
    }).then((data) => {
        data = JSON.parse(JSON.stringify(data));
        return data;
    });
}

function printStatic(){

    return 'Hey there!';
}

module.exports.print = print;
module.exports.printStatic = printStatic;
