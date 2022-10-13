
const { addPlanetaDynamoDB, getPlanetaDynamoDB } = require('./services');
const { apiService } = require('../models/serviceApi');
const START_TABLE = process.env.START_TABLE;

module.exports.addPlanetaTable = async (body) => {
    const params = { TableName: START_TABLE, Item: body };
    return await addPlanetaDynamoDB(params);
}

module.exports.getPlanetaTable = async () => {
    const data = { TableName: START_TABLE }
    return await getPlanetaDynamoDB(data);
}
module.exports.getAPIPlaneta = async () => {
    return await apiService();
}
