import JwtDecode from 'jwt-decode';
class TokenService {
    getAccessToken() {
        let token = localStorage.getItem('Authorization');
        if (token) {
            token = token.split(' ');
            if (token.length > 1) {
                return token[1];
            }
        }
        return null;
    }

    getDecodedToken() {
        const token = this.getAccessToken();
        if (token) {
            return JwtDecode(token);
        }
        return null;
    }

    shouldRoute() {
        const decoded = this.getDecodedToken();
        if (decoded && decoded.exp) {
            return new Date(decoded.exp) < new Date();
        }
        return false;
    }
};

export default TokenService;