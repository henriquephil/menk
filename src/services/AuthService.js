import Api from "./Api";

class AuthService {
    getAccessToken({username, password}) {
        const credentials = new FormData();
        credentials.append('client_id', 'client');
        credentials.append('client_secret', 'secret');
        credentials.append('grant_type', 'password');
        credentials.append('username', username);
        credentials.append('password', password);
        return Api.post('/oauth/token', credentials)
                .then(res => {
                    localStorage.setItem("Authorization", `${res.data.token_type} ${res.data.access_token}`);
                    return res;
                });
    }
}
export default AuthService;