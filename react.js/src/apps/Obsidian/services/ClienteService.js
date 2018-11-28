import Api from "./Api";

class ClienteService {
    fetchPage(page, size) {
        return Api.get('/cliente');
    }

    post(body) {
        return Api.post('/cliente', body);
    }

    get(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    data: {
                        id: id,
                        nome: 'adasd'
                    }
                });
            }, 1000);
        });
    }
}
export default ClienteService;