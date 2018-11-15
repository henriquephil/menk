//import Api from "./Api";

class OrcamentoService {
    fetchAll() {
        //return Api.get('/orcamento');
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const result = {
                    page: 1,
                    pages: 42,
                    data :[
                        {id: 1, descricao: "Aasdasds"},
                        {id: 2, descricao: "B12wqewq"},
                        {id: 3, descricao: "Cfdbnentr"},
                        {id: 4, descricao: "Dryevbv"},
                        {id: 5, descricao: "Esdghertgrwet4t"},
                        {id: 6, descricao: "Fvdsadfdfff"},
                        {id: 7, descricao: "Gf44f4fssd"},
                        {id: 8, descricao: "HGFG34243g"},
                        {id: 9, descricao: "Ifsdgbht"},
                        {id: 10, descricao: "Jvcxbvcbxcvb"},
                        {id: 11, descricao: "Kfdgfsdgasv"},
                        {id: 12, descricao: "Lxzcvbvcng"},
                        {id: 13, descricao: "Mhshgsfa"},
                        {id: 14, descricao: "Ndsfwerfdfh"},
                        {id: 15, descricao: "Onvcbvbadsf"},
                        {id: 16, descricao: "Pasf3r3r3v"},
                        {id: 17, descricao: "Qvsdvsagjh"},
                        {id: 18, descricao: "Rgasvadvdsaar4"},
                        {id: 19, descricao: "Sfet4hsfdgs"},
                        {id: 20, descricao: "Ta3tghjtuj"}
                    ],
                    size: 20
                }
                resolve({
                    data: result
                });
            }, 1000);
        });
    }
}
export default OrcamentoService;