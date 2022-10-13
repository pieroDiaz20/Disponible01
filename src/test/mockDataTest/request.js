

module.exports.mockRequest = {
    successPost: {
        body: JSON.stringify({
            nombre: "Tierra",
            periodo_de_rotacion: "27",
            periodo_orbital: "463",
            diametro: "19720",
            climatizado: "temperate",
            gravedad: "1 standard",
            terreno: "ocean",
            superficie_del_agua: "100",
            poblacion: "1000000000",
            residentes: [
                1,
                2,
                3
            ],
            peliculas: [
                5
            ],
            creado: "2014-12-10T12:45:06.577000Z",
            editado: "2014-12-20T20:58:18.434000Z",
            url: "https://swapi.py4e.com/api/planets/10/"
        })
    },
    failPost: {
        body: JSON.stringify({
            nom: "Tierra",
            periodo_de_rotacion: "27",
            periodo_orbital: "463",
            diametro: "19720",
            climatizado: "temperate",
            gravedad: "1 standard",
            terreno: "ocean",
            superficie_del_agua: "100",
            poblacion: "1000000000",
            residentes: [
                1,
                2,
                3
            ],
            peliculas: [
                5
            ],
            creado: "2014-12-10T12:45:06.577000Z",
            editado: "2014-12-20T20:58:18.434000Z",
            url: "https://swapi.py4e.com/api/planets/10/"
        })
    }
}