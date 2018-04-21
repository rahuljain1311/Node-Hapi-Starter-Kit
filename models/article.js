'use strict';

module.exports = function (sequelize, DataTypes) {

    const Article = sequelize.define('Article', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        link: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return Article;
};
