import MetaResponse from '../../../utils/metaResponse';

class HealthcheckResponse {
    public meta: MetaResponse;
    public ping: string;
    public status_code: number;

    constructor() {
        this.meta = new MetaResponse();
        this.ping = 'pong';
    }
}

export default HealthcheckResponse;
