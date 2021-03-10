const metaSchema = {
    $id: 'metaSchema',
    type: 'object',
    properties: {
        version: { type: 'string' },
    },
    required: ['version'],
};

export { metaSchema };
