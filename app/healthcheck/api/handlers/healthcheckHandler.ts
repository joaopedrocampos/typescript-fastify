import { FastifyReply, FastifyRequest } from 'fastify';

import HealthcheckResponse from '../response/HealthcheckResponse';

async function healthcheckHandler(
    request: FastifyRequest,
    reply: FastifyReply
) {
    const response = new HealthcheckResponse();

    request.log.error(JSON.stringify(response));

    return reply.code(200).send(response);
}

export default healthcheckHandler;
