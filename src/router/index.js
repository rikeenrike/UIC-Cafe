import {createRouter, createWebHistory} from "vue-router";

import UserLoginPage from '../components/UserLoginPage.vue';
import UserMenuPage from '../components/UserMenuPage.vue';
import UM_HotCoffees from '../components/UM_HotCoffees.vue';

const routes = [
    {
        path: '/',
        name: 'UserLoginPage',
        component: UserLoginPage,
    },
    {
        path: '/menu',
        name: 'UserMenuPage',
        component: UserMenuPage,
    },
    {
        path: '/menu/hotcoffees',
        name: 'Hot Coffees',
        component: UM_HotCoffees,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });

export default router;