const { addPlanets } = require('../controllers/planetaController');
const { mockRequest } = require('./mockDataTest/request');
const { mockResponse } = require('./mockDataTest/response');

jest.mock('../models/services');
jest.mock('uuid', () => ({ v4: () => '634b59eb-dc11-48f0-ad46-ca2d85ef2a9d' }));

describe('Agregar planetas', () => {
    test('Retorna los datos ingresados y código de estado 201', async () => {
        const respuesta = await addPlanets(mockRequest.successPost);
        expect(respuesta.statusCode).toBe(201);
        expect(respuesta.body).toMatch(mockResponse.successPost.body);
    });
    test('Retorna un mensaje de error de validación al no ingresar el parámetro nombre correctamente', async () => {
        const respuesta = await addPlanets(mockRequest.failPost);
        expect(respuesta.statusCode).toBe(401);
        console.log(respuesta.body);
        expect(respuesta.body).toMatch(mockResponse.failPost.body);
    });
});
