import Api from "../../../services/Api";

class DefaultCrudService {

    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    fetchPage({page, size}) {
        return Api.get(this.baseUrl, {params: {size: size, page: page}});
    }

    post(body) {
        return Api.post(this.baseUrl, body);
    }

    save(body) {
        if (body.id) {
            return this.put(body.id, body);
        } else {
            return this.post(body);
        }
    }

    put(id, body) {
        return Api.put(`${this.baseUrl}/${id}`, body);
    }

    get(id) {
        return Api.get(`${this.baseUrl}/${id}`)
    }
}
export default DefaultCrudService;