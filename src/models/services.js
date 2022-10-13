'use strict';
const aws = require('aws-sdk');
const IS_OFFLINE = process.env.IS_OFFLINE; let dynamodb;

if (IS_OFFLINE === true) {
    dynamodb = new aws.DynamoDB.DocumentClient({ region: 'localhost', endpoint: 'http://localhost:8000' });
} else { dynamodb = new aws.DynamoDB.DocumentClient(); }


module.exports.addPlanetaDynamoDB = async (params) => {
    return await dynamodb.put(params, (error) => {
        if (error) { throw new Error(error.message, 'Error al conectar con la base de datos'); }
    }).promise();
}

module.exports.getPlanetaDynamoDB = async (data) => {
    return await dynamodb.scan(data, (error) => {
        if (error) { throw new Error(error.message, 'Error al conectar con la base de datos'); }
    }).promise().then(result => { return result.Items });
}





