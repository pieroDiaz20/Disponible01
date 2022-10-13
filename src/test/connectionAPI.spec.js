
const { mockResponse } = require('./mockDataTest/response');
const modelAPI = require('../models/serviceApi');
const { getAPIPlaneta } = require('../models/planetaModel');

jest.mock('../models/serviceApi');
describe('API de STARWARS', () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });
    test('Retorna una lista del API STARWARS al pasar la validación', async () => {

        jest.spyOn(modelAPI, 'apiService').mockReturnValue(Promise.resolve(mockResponse.successGetApi));
        const resultado = await getAPIPlaneta();
        expect(resultado).toBe(mockResponse.successGetApi);
    });


});