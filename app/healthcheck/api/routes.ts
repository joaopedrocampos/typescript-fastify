import { FastifyInstance } from 'fastify';

import healthcheckHandler from './handlers/healthcheckHandler';
import healthcheckSchema from './schemas/healthcheckSchema';

async function healthcheckRoutes(fastify: FastifyInstance) {
    fastify.route({
        method: 'GET',
        url: '/healthcheck',
        handler: healthcheckHandler,
        schema: healthcheckSchema,
    });
}

export default healthcheckRoutes;
