'use strict';
const Model = require('../../models/index');

exports.print = (id) => {

    return Model.Article.find({
        where: { id: id },
        attributes: ['id', 'link', 'description']
    }).then((data) => {

        data = JSON.parse(JSON.stringify(data));
        console.log(data);

        return data;
    });
};
