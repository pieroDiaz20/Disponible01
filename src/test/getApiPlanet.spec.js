const { api } = require('../controllers/planetaController');
const { mockResponse } = require('./mockDataTest/response');
const model = require('../models/planetaModel');
jest.mock('../models/planetaModel');
describe('API de STARWARS', () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });
    test('Retorna el API de STARWARS ', async () => {
        jest.spyOn(model, 'getAPIPlaneta').mockReturnValue(Promise.resolve(mockResponse.successGetApi));
        const resultado = await api();
        expect(resultado.statusCode).toBe(200);
        expect(resultado.body).toMatch(JSON.stringify(mockResponse.successGetApi));
    });
    test('Retona un mensaje de No hay datos y código de estado 401', async () => {
        jest.spyOn(model, 'getAPIPlaneta').mockReturnValue(Promise.resolve(mockResponse.failGet));
        const resultado = await api();
        expect(resultado.statusCode).toBe(401);
        expect(resultado.body).toBe(JSON.stringify(mockResponse.noFoundData));
    });
});