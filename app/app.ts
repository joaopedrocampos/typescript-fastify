import fastify, { FastifyInstance } from 'fastify';
import { IncomingMessage, Server, ServerResponse } from 'http';

import healthcheckRoutes from './healthcheck/api/routes';

import { metaSchema } from './utils/commonSchemas';

const server: FastifyInstance<
    Server,
    IncomingMessage,
    ServerResponse
> = fastify({
    logger: true,
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

export default startServer;
