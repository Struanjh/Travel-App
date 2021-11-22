
//Provides support for compiled/transpiled async functions
import "regenerator-runtime/runtime";
const request = require('supertest');
const app = require('../src/server/app');


//Test function sends a request to the /test route in server/app.js, and tests if a 200 success response code is returned
//Server.js and app.js in server folder were seperated so server doesn't keep running after testing
    describe("Test path", () => {
        test("When get request is made to test path we should get success response code of 200", async () => {
            const response = await request(app).get("/test");
            expect(response.statusCode).toBe(200);
        });
    });


