//import Api from "./Api";

class ClienteService {
    fetchPage(page, size) {
        //return Api.get('/clientes');
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const result = {
                    pages: 42,
                    index: page,
                    size: size,
                    data :[
                        {id: 1, nome: "Aasdasds"},
                        {id: 2, nome: "B12wqewq"},
                        {id: 3, nome: "Cfdbnentr"},
                        {id: 4, nome: "Dryevbv"},
                        {id: 5, nome: "Esdghertgrwet4t"},
                        {id: 6, nome: "Fvdsadfdfff"},
                        {id: 7, nome: "Gf44f4fssd"},
                        {id: 8, nome: "HGFG34243g"},
                        {id: 9, nome: "Ifsdgbht"},
                        {id: 10, nome: "Jvcxbvcbxcvb"},
                        {id: 11, nome: "Kfdgfsdgasv"},
                        {id: 12, nome: "Lxzcvbvcng"},
                        {id: 13, nome: "Mhshgsfa"},
                        {id: 14, nome: "Ndsfwerfdfh"},
                        {id: 15, nome: "Onvcbvbadsf"},
                        {id: 16, nome: "Pasf3r3r3v"},
                        {id: 17, nome: "Qvsdvsagjh"},
                        {id: 18, nome: "Rgasvadvdsaar4"},
                        {id: 19, nome: "Sfet4hsfdgs"},
                        {id: 20, nome: "Ta3tghjtuj"}
                    ]
                }
                resolve({
                    data: result
                });
            }, 1000);
        });
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