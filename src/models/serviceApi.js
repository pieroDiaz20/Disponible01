const axios = require('axios');

module.exports.apiService = async () => {
    try {
        let api = process.env.APISTARWARS;
        if (!api) {
            return { mensaje: 'El servicio  que solicita no existe' }
        } else {
            const req = await axios.get(api);
            return req.data.results.map(planetas => ({
                nombre: planetas.name,
                periodo_de_rotacion: planetas.rotation_period,
                periodo_orbital: planetas.orbital_period,
                diametro: planetas.diameter,
                climatizado: planetas.climate,
                gravedad: planetas.gravity,
                terreno: planetas.terrain,
                superficie_del_agua: planetas.surface_water,
                poblacion: planetas.population,
                residentes: planetas.residents,
                peliculas: planetas.films,
                creado: planetas.created,
                editado: planetas.edited,
                url: planetas.url
            }));
        }

    } catch (error) {
        throw new Error(error.message);
    }
};