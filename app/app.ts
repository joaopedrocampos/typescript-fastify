import fastify, { FastifyInstance } from 'fastify';
import { IncomingMessage, Server, ServerResponse } from 'http';
import fastifySwagger from 'fastify-swagger';
import Ajv from 'ajv';
import swaggerFile from './swagger';

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
});

function registerPlugins(): void {
    server.register(fastifySwagger, swaggerFile);
}

function setSchemaCompiler() {
    const ajv = new Ajv({
        allErrors: true,
        coerceTypes: true,
        removeAdditional: false,
        useDefaults: true,
    });

    // @ts-ignore
    server.setValidatorCompiler(({ schema }) => {
        return ajv.compile(schema);
    });
}

function registerCommonSchemas(): void {
    server.addSchema(metaSchema);
}

function registerRoutes(): void {
    server.register(healthcheckRoutes);
}

async function startServer(): Promise<FastifyInstance> {
    setSchemaCompiler();

    registerCommonSchemas();

    registerRoutes();

    registerPlugins();

    await server.listen(8080, '0.0.0.0');
    server.swagger();

    return server;
}

async function closeServer(): Promise<void> {
    await server.close();
}

export { closeServer, startServer };
