import Api from "./Api";

class ClienteService {
    baseUrl = '/cliente';

    fetchPage({page, size}) {
        return Api.get(this.baseUrl, {params: {size: size, page: page}});
    }

    post(body) {
        return Api.post(this.baseUrl, body);
    }

    put(id, body) {
        return Api.put(`${this.baseUrl}/${id}`, body);
    }

    get(id) {
        return Api.get(`${this.baseUrl}/${id}`)
    }
}
export default ClienteService;