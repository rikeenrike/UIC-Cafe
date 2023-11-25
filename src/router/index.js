import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../pages/LoginPage.vue";
import MainPage from "../pages/MainPage.vue";
import Notifications from "../pages/Notifications.vue";
import AboutPage from "../pages/AboutPage.vue";
import HistoryPage from "../pages/HistoryPage.vue";
import BestSellersPage from "../pages/BestSellersPage.vue";
import Page404 from "../pages/Page404.vue";
import CartPage from "../pages/CartPage.vue";

const routes = [
  {
    path: '/',
    name: 'LoginPage',
    component: LoginPage,
  },
  {
    path: '/menu',
    name: 'MainContent',
    component: MainPage,
    children: [
      {
        path: '',
        name: 'MenuPage',
        component: () => import('../main_components/main_content.vue'), 
      },
      {
        name: 'drinks',
        path: '/menu/drinks/:id',
        component: () => import('../pages/ViewItems.vue'),
      },

    ],
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: () => import('../pages/AboutPage.vue'),
  },
  {
    path: '/notifications',
    name: 'Notifications',
    component: () => import('../pages/Notifications.vue'),
  },
  {
    path: '/history',
    name: 'HistoryPage',
    component: () => import('../pages/HistoryPage.vue'),
  },
  {
    path: '/bestsellers',
    name: 'BestSellersPage',
    component: () => import('../pages/BestSellersPage.vue'),
  },
  {
    path: '/cart',
    name: 'CartPage',
    component: () => import('../pages/CartPage.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Page404',
    component: () => import('../pages/Page404.vue'),
  },  
];


const router = createRouter({
  history: createWebHistory(),
  base: process.env.NODE_ENV === 'production' ? '/' : '',
  routes,
});

export default router;
