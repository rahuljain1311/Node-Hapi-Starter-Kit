'use strict';

const fs        = require('fs');
const path      = require('path');
const Sequelize = require('sequelize');
const basename  = path.basename(module.filename);
const env       = process.env.NODE_ENV || 'local_postgres';
let config    = require(__dirname + '/../config/config.js')[env];
const db        = {};
const AWS = require('aws-sdk');

var sequelize;
if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
    .readdirSync(__dirname)
    .filter((file) => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach((file) => {
        const model = sequelize['import'](path.join(__dirname, file));
        db[model.name] = model;
    });

Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((err) => {
        console.log("RJRJRJRJRJ");
        if(
            err.name === 'SequelizeConnectionRefusedError' || 
            err.name === 'SequelizeConnectionError' || 
            err.name === 'SequelizeAccessDeniedError' ||
            err.name === 'SequelizeConnectionTimedOutError' ||
            err.name === 'SequelizeInvalidConnectionError' ||
            err.name === 'SequelizeHostNotReachableError' ||
            err.name === 'SequelizeHostNotFoundError'
        ) {
            return reInitializeDBConn();
        }
        else {
            console.log('Unable to connect to the database:', JSON.stringify(err));
        }
    });

// Get the token from the auth chain
function getToken(config) {
    return new Promise(resolve => {
        let signer = new AWS.RDS.Signer(config);
        console.log('Inside log1.. yay', signer)
        signer.getAuthToken({}, (err, token) => {
            resolve(token);
        });
    })
}

async function reInitializeDBConn () {
    console.log('Inside reInitializeDBConn.. yay')
    const token = await getToken(config);
    console.log("token = ", token)
    sequelize.beforeConnect((config, token) => {

      console.log("token = ", token)
      config.password = token;
      return config;
    });
  };

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.reInitializeDBConn = reInitializeDBConn;

module.exports = db;