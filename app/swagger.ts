import * as pkgJson from '../package.json';
import { FastifyDynamicSwaggerOptions } from 'fastify-swagger';

const swaggerOptions: FastifyDynamicSwaggerOptions = {
    routePrefix: '/docs',
    exposeRoute: true,
    swagger: {
        info: {
            title: 'Typescript Axios API',
            description: 'API using Fastify and Swagger',
            version: pkgJson.version,
        },
        host: 'localhost',
        schemes: ['http', 'https'],
        consumes: ['application/json'],
        produces: ['application/json'],
        securityDefinitions: {
            apiKey: {
                type: 'apiKey',
                in: 'header',
                name: 'apiKey',
            },
        },
    },
};

export default swaggerOptions;
