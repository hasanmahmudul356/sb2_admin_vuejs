window.Vue = require('vue');
import jQuery from 'jquery';

window.jQuery = jQuery;
window.$ = jQuery;


import Vue from 'vue';
import App from './App.vue';
import router from './router';

import Mixin from './mixins/base_mixin';
import HttpMixin from './mixins/http_mixin';

Vue.mixin(Mixin);
Vue.mixin(HttpMixin);

import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);

import VTooltip from 'v-tooltip';

Vue.use(VTooltip);

import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios);

import Vuex from 'vuex';
Vue.use(Vuex);
import StoreData from './store/index';
const store = new Vuex.Store(StoreData);

import VueToastr from '@deveodk/vue-toastr'
Vue.use(VueToastr, {
    defaultPosition: 'toast-bottom-right',
    defaultType: 'info',
    defaultTimeout: 3000
});
import '@deveodk/vue-toastr/dist/@deveodk/vue-toastr.css'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
Vue.use(VueSweetalert2);

import {initialize} from './helpers/general';

initialize(store, router);

Vue.config.productionTip = false;
new Vue({
    router, axios, store,
    render: h => h(App)
}).$mount('#app');
