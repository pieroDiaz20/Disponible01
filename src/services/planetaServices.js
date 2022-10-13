'use strict';
const joi = require('../utils/validation/joiValidation');
const { getPlanetaTable, getAPIPlaneta } = require('../models/planetaModel');
const addPTable = require('../models/planetaModel');
const { v4 } = require('uuid');


module.exports.addPla = async (body) => {

    const validar = await joi.planetaValidate(body);
    if (validar.error) {
        return { statusCode: 401, body: JSON.stringify({ mensaje: validar.error.message }) }
    } else {
        body.id = v4();
        await addPTable.addPlanetaTable(body);
        return { statusCode: 201, body: JSON.stringify(body) }
    }
}
module.exports.apiplanet = async () => {
    try {
        const respuestaAPI = await getAPIPlaneta();
        if (Object.keys(respuestaAPI).length === 0) {
            return { statusCode: 401, body: JSON.stringify({ data: [], mensaje: 'No hay datos' }) }
        } else {
            return { statusCode: 200, body: JSON.stringify(respuestaAPI) }
        }
    } catch (error) {
        throw new Error(error.message);
    }

}
module.exports.getPla = async () => {

    const datatable = await getPlanetaTable()
    if (Object.keys(datatable).length === 0) {
        return { statusCode: 401, body: JSON.stringify({ data: [], mensaje: 'No hay datos' }) }
    } else {
        return { statusCode: 200, body: JSON.stringify(datatable) }
    }
}

