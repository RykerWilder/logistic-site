import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import About from './pages/About.vue';
import Contacts from './pages/Contacts.vue';

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomePage
        },
        {
            path: "/about-us",
            name: "about",
            component: About
        },
        {
            path: "/contact-us",
            name: "contact",
            component: Contacts
        }
    ]
})