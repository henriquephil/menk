import JwtDecode from 'jwt-decode';

export default {
    shouldRoute() {
        let token = localStorage.getItem('Authorization');
        if (token) {
            token = token.split(' ');
            if (token.length > 1) {
                token = token[1];
                const decoded = JwtDecode(token);
                return new Date(decoded.exp) < new Date();
            }
        }
        return false;
    }
};