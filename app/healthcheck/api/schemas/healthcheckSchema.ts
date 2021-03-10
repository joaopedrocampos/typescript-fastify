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
                status_code: { type: 'integer' },
            },
            required: ['ping', 'status_code'],
        },
    },
};

export default schema;
