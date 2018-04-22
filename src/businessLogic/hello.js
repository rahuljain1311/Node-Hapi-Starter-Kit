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

function printStatic(){

    
    return 'Hey there!';
}

module.exports.print = print;
module.exports.printStatic = printStatic;
