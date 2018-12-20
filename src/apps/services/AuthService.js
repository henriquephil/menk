import Api from "../services/Api";

class AuthService {
    baseUrl = '/oauth/token';

    getAccessToken({username, password}) {
        const credentials = new URLSearchParams();
        credentials.append('client_id', 'client');
        credentials.append('client_secret', 'secret');
        credentials.append('grant_type', 'password');
        credentials.append('username', username);
        credentials.append('password', password);
        return Api.post(this.baseUrl, credentials)
                .then(res => {
                    localStorage.setItem("Authorization", `${res.data.token_type} ${res.data.access_token}`)
                    return res;
                });
    }

}
export default AuthService;