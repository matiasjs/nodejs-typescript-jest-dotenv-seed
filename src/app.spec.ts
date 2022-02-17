import request from 'supertest';
import app from './app';
import { User, users } from './users/users';

describe("TEST: GET /users", () => {
    const endpoint = '/users';

    test("Should return an user list and 200 status code", async () => {
        const {statusCode, body}: {statusCode: number, body: User[]} = await request(app).get(endpoint).send();

        expect(statusCode).toBe(200);
        
        expect(body.length).toBe(users.length);

        expect(body[0]).toEqual({
            uuid: expect.toBeString(),
            name: expect.toBeString(),
            surname: expect.toBeString(),
            age: expect.toBeNumber(),
        });
    });
})