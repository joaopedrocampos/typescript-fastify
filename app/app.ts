import fastify, { FastifyInstance } from 'fastify';
import { IncomingMessage, Server, ServerResponse } from 'http';

import healthcheckRoutes from './healthcheck/api/routes';

import { metaSchema } from './utils/commonSchemas';

const server: FastifyInstance<
    Server,
    IncomingMessage,
    ServerResponse
> = fastify({
    logger: {
        level: process.env.LOG_LEVEL || 'info',
    },
    http2: true,
});

function registerCommonSchemas(): void {
    server.addSchema(metaSchema);
}

function registerRoutes(): void {
    server.register(healthcheckRoutes);
}

function startServer(): FastifyInstance {
    registerCommonSchemas();

    registerRoutes();

    return server;
}

async function closeServer(): Promise<void> {
    await server.close();
}

export { startServer, closeServer };
