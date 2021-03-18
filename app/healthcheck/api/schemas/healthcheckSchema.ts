const schema = {
    description: 'Application healthcheck',
    tags: ['healthcheck'],
    response: {
        200: {
            description: 'Success',
            type: 'object',
            properties: {
                meta: { $ref: 'metaSchema#' },
                ping: { type: 'string' },
            },
            required: ['ping'],
        },
    },
};

export default schema;
