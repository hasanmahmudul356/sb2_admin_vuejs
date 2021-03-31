import axios from 'axios';
import Cookies from "vue-cookies";

export function initialize(store, router) {
    router.beforeEach((to, from, next) => {
         next();
        axios.defaults.headers.common["Current-module"] = to.name;

        window.document.title = to.meta.pageTitle !== undefined ? to.meta.pageTitle : 'Home';
        // const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
        // const currentUser = store.state.currentUser;

        // if (!store.state.isConfigLoaded && requiresAuth) {
        //     var URL = process.env.VUE_APP_API_BASE_URL + '/' + process.env.VUE_APP_API_VERSION + '/configuration/';
        //     axios.get(URL).then(function (response) {
        //         store.state.isConfigLoaded = true;
        //         store.state.Config = response.data.result;
        //         calNext(to, from, next, requiresAuth, currentUser);
        //     });
        //     calNext(to, from, next, requiresAuth, currentUser);
        // } else {
        //     calNext(to, from, next, requiresAuth, currentUser);
        // }
          // calNext(to, from, next, requiresAuth, currentUser);

    });

    // function calNext(to, from, next, requiresAuth, currentUser) {
    //     if (requiresAuth && !currentUser) {
    //         next('/');
    //     } else if ((to.path == '/login' && currentUser) ||
    //         (to.path == '/' && currentUser) ||
    //         (to.path == '/registration' && currentUser)) {
    //         next('/students');
    //     } else {
    //         next();
    //     }
    //     next();
    // }

    axios.interceptors.response.use(res => res, err => {
            var retData = err.response.data;
            if (parseInt(retData.status) === 5001) {
                store.commit('logout');
            }
            throw err;
        }
    );

    if (Cookies.isKey('auth_token') &&
        Cookies.isKey('auth_token') !== undefined &&
        Cookies.get('auth_token') !== '') {
        setAuthorization(Cookies.get('auth_token'));
    }

}

export function setAuthorization(token) {
    axios.defaults.headers.common["Authorization"] = `Token ${token}`
}
