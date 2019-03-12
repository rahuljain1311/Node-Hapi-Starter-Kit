'use strict';
const Model = require('../../models/index');

function print(id){

    return Model.Article.find({
        where: { id: id },
        attributes: ['id', 'link', 'description']
    }).then((data) => {
        data = JSON.parse(JSON.stringify(data));
        return data;
    }).catch ((err) => {
        console.log('PJPJ');
        console.log(JSON.stringify(err));
        if(err.name === 'SequelizeConnectionRefusedError' || err.name === 'SequelizeConnectionError' || err.name === 'SequelizeAccessDeniedError') {
            return Model.reInitializeDBConn();
        }
        else {
            console.log('Unable to connect to the database:', JSON.stringify(err));
        }

    })
}

function printStatic(){

    return 'Hey there!';
}

module.exports.print = print;
module.exports.printStatic = printStatic;
