import {createRouter, createWebHistory} from "vue-router";
import UserLoginPage from '../components/UserLoginPage.vue';

const routes = [
    {
        path: '/',
        name: 'UserLoginPage',
        component: UserLoginPage,
    },
    {
        path: '/menu',
        name: 'UserMenuPage',
        component: () => import('../components/UserMenuPage.vue'),
    },
    {
        path: '/menu/drinks/hotcoffees',
        name: 'Hot Coffees',
        component: () => import('../components/category_drinks/UM_HotCoffees.vue'),
    },
    {
        path: '/test',
        name: 'test',
        component: () => import('../components/test.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });

export default router;