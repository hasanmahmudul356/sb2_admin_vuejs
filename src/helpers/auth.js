import Cookies from 'vue-cookies';
export function getLocalUser() {
    if (Cookies.isKey('auth_token')) {
        return Cookies.get('auth_token');
    }
    return null;
}