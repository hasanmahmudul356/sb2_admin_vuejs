import Cookies from "vue-cookies";

export const mutations = {
    logout() {
        Cookies.remove('auth_token');
        Cookies.remove('session_user');
        window.location = '/'
    },
    modalTitle(state, title) {
        state.modalTitle = title;
    },
    formObject(state, object) {
        state.formObject = object;
    },
    formType(state, type) {
        state.formType = type;
    }
}