const schema = {
    description: 'Application healthcheck',
    tags: ['healthcheck'],
    response: {
        '200': {
            description: 'Successful response',
            type: 'object',
            properties: {
                meta: { $ref: 'metaSchema#' },
                ping: { type: 'string' },
            },
            required: ['ping', 'meta'],
        },
    },
};

export default schema;
