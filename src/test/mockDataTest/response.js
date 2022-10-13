module.exports.mockResponse = {
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
            url: "https://swapi.py4e.com/api/planets/10/",
            id: "634b59eb-dc11-48f0-ad46-ca2d85ef2a9d"
        })
    },
    failPost: {
        body: JSON.stringify({
            mensaje: "nombre es obligatorio. \"nom\" is not allowed"
        })
    },
    successGet: [

        {
            "diametro": "19720",
            "periodo_de_rotacion": "27",
            "nombre": "Tierra",
            "climatizado": "temperate",
            "superficie_del_agua": "100",
            "residentes": [
                1,
                2,
                3
            ],
            "url": "https://swapi.py4e.com/api/planets/10/",
            "poblacion": "1000000000",
            "periodo_orbital": "463",
            "peliculas": [
                5
            ],
            "editado": "2014-12-20T20:58:18.434000Z",
            "gravedad": "1 standard",
            "creado": "2014-12-10T12:45:06.577000Z",
            "id": "204b85ae-f53b-4a76-a380-9acb56f38829",
            "terreno": "ocean"
        }
    ],
    failGet: [],
    successGetApi: [
        {
            "nombre": "Tatooine",
            "periodo_de_rotacion": "23",
            "periodo_orbital": "304",
            "diametro": "10465",
            "climatizado": "arid",
            "gravedad": "1 standard",
            "terreno": "desert",
            "superficie_del_agua": "1",
            "poblacion": "200000",
            "residentes": [
                "https://swapi.py4e.com/api/people/1/",
                "https://swapi.py4e.com/api/people/2/",
                "https://swapi.py4e.com/api/people/4/",
                "https://swapi.py4e.com/api/people/6/",
                "https://swapi.py4e.com/api/people/7/",
                "https://swapi.py4e.com/api/people/8/",
                "https://swapi.py4e.com/api/people/9/",
                "https://swapi.py4e.com/api/people/11/",
                "https://swapi.py4e.com/api/people/43/",
                "https://swapi.py4e.com/api/people/62/"
            ],
            "peliculas": [
                "https://swapi.py4e.com/api/films/1/",
                "https://swapi.py4e.com/api/films/3/",
                "https://swapi.py4e.com/api/films/4/",
                "https://swapi.py4e.com/api/films/5/",
                "https://swapi.py4e.com/api/films/6/"
            ],
            "creado": "2014-12-09T13:50:49.641000Z",
            "editado": "2014-12-20T20:58:18.411000Z",
            "url": "https://swapi.py4e.com/api/planets/1/"
        },
        {
            "nombre": "Alderaan",
            "periodo_de_rotacion": "24",
            "periodo_orbital": "364",
            "diametro": "12500",
            "climatizado": "temperate",
            "gravedad": "1 standard",
            "terreno": "grasslands, mountains",
            "superficie_del_agua": "40",
            "poblacion": "2000000000",
            "residentes": [
                "https://swapi.py4e.com/api/people/5/",
                "https://swapi.py4e.com/api/people/68/",
                "https://swapi.py4e.com/api/people/81/"
            ],
            "peliculas": [
                "https://swapi.py4e.com/api/films/1/",
                "https://swapi.py4e.com/api/films/6/"
            ],
            "creado": "2014-12-10T11:35:48.479000Z",
            "editado": "2014-12-20T20:58:18.420000Z",
            "url": "https://swapi.py4e.com/api/planets/2/"
        }
    ],
    noFoundData: {
        "data": [],
        "mensaje": "No hay datos"
    }
};