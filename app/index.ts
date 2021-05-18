import { startServer } from './app';

(async function start() {
    try {
        const fastify = await startServer();

        console.log(fastify.printRoutes());
    } catch (err) {
        throw err;
    }
})();
