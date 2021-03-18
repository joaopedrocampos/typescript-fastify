import { closeServer, startServer } from '../../../app';

let server;

beforeAll(async () => {
    server = await startServer();
});

afterAll(async () => {
    await closeServer();
});

describe('Healthcheck', () => {
    describe('When healthcheck response is valid', () => {
        it('Should reply with valid PING response', async () => {
            const payload = await server.inject({
                url: '/healthcheck',
                method: 'GET',
            });

            const response = JSON.parse(payload.payload);

            expect(payload.statusCode).toEqual(200);

            expect(response.ping).toEqual('pong');
            expect(response.meta).toBeDefined();
        });
    });
});
