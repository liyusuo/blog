import axios from "axios"
class AjaxRequest {
    constructor() {
        this.baseURL = 'http://localhost:3000';
        this.timeout = 3000;
    }
    merge(options) {
        return {
            ...options,
            baseURL: this.baseURL,
            timeout: this.timeout
        }
    }
    request(options) {
        let instance = axios.create();
        let config = this.merge(options);
        console.log(config)
        return instance(config)
    }
}

export default new AjaxRequest