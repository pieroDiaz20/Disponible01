'use strict';
const { addPla, getPla, apiplanet } = require('../services/planetaServices');

module.exports.api = async () => { return await apiplanet(); }

module.exports.addPlanets = async (event) => { return await addPla(JSON.parse(event.body)); }

module.exports.getPlanets = async () => { return await getPla(); }