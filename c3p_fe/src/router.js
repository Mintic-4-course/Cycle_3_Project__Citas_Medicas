import {createRouter, createWebHistory} from "vue-router";
import App from './App.vue'
import SingUp from "./components/SingUp";
import LogIn from "./components/LogIn";
import Home from "./components/HomeUser";

const routes = [
    {
        path: '/',
        name: 'root',
        component: App
    },
    {
        path: '/user/login',
        name: 'login',
        component: LogIn
    },
    {
        path: '/user/signUp',
        name: 'signUp',
        component: SingUp
    },
    {
        path: '/user/home',
        name: 'home',
        component: Home
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;