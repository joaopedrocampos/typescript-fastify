import startServer from './app';

const PORT: number = +process.env.PORT || 8080;
const fastify = startServer();

(async function start() {
    try {
        await fastify.listen(PORT, '0.0.0.0');
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
})();
