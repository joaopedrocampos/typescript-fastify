import * as pkgJson from '../../../package.json';

class MetaResponse {
    public version: string;

    constructor() {
        this.version = pkgJson.version;
    }
}

export default MetaResponse;
