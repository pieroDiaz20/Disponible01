const { getPlanets } = require('../controllers/planetaController');
const { mockResponse } = require('./mockDataTest/response');
const model = require('../models/planetaModel');

jest.mock('../models/planetaModel');

describe('Listar Planetas', () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });
    test('Retorna la lista de planetas registradas en la base de datos', async () => {
        jest.spyOn(model, 'getPlanetaTable').mockReturnValue(Promise.resolve(mockResponse.successGet));
        const respuesta = await getPlanets();
        expect(respuesta.statusCode).toBe(200);
        expect(respuesta.body).toMatch(JSON.stringify(mockResponse.successGet));
    });
    test("Retona un mensaje de No hay datos y código de estado 401", async () => {
        jest.spyOn(model, 'getPlanetaTable').mockReturnValue(Promise.resolve(mockResponse.failGet));
        const respuesta = await getPlanets();
        expect(respuesta.statusCode).toBe(401);
        expect(respuesta.body).toBe(JSON.stringify(mockResponse.noFoundData));
    });
});
