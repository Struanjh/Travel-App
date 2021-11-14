

const request = require('supertest');
const app = require('../src/server/server');

//Test if the server.js responds with successful status - 200 - when post request is made to weatherBit API endpoint
describe('Test WeatherBit Post EndPoint', () => {
    test('get weather data', async () => {
        const res = await request(app)
            .post('/callWeatherBit')
            .send({
                req: `https://api.weatherbit.io/v2.0/current?lat=${req.body.latitude}&lon=${req.body.longitude}&key=${weatherBitKey}`,
            });
        expect(res.statusCode).toEqual(200);
    });
});