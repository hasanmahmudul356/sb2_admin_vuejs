import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
    {
        path: '/login', name: 'login',
        component: () => import('../views/auth/LoginComponent'),
        meta: {dataUrl: 'students', pageTitle: 'Student', requiresAuth : false},
    },
    {
        path: '/', name: 'login',
        component: () => import('../views/auth/LoginComponent'),
        meta: {dataUrl: 'students', pageTitle: 'Student', requiresAuth : false},
    },
    {
        path: '/registration', name: 'registration',
        component: () => import('../views/auth/RegistrationComponent'),
        meta: {dataUrl: 'registration', pageTitle: 'Registration', requiresAuth : false},
    },
    {
        path: '/forget-password', name: 'forget-password',
        component: () => import('../views/auth/ForgetPasswordComponent'),
        meta: {dataUrl: 'forget_password', pageTitle: 'Registration', requiresAuth : false},
    },
    {
        path: '/dashboard', name: 'home',
        component: () => import('../views/pages/DashboardComponent'),
        meta: {dataUrl: 'students', pageTitle: 'Student', requiresAuth : false},
    },
    {
        path: '/student', name: 'home',
        component: () => import('../views/pages/student/StudentComponent'),
        meta: {dataUrl: 'students', pageTitle: 'Student', requiresAuth : false},
    },
    {
        path: '/institute', name: 'institute',
        component: () => import('../views/pages/institute/InstituteComponent'),
        meta: {dataUrl: 'institutes', pageTitle: 'Institute', requiresAuth : false},
    },
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router
