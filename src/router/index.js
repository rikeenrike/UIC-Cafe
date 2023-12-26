import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../pages/LoginPage.vue";
import MainPage from "../pages/MainPage.vue";


const routes = [
  {
    path: '/',
    name: 'LoginPage',
    component: LoginPage,
    meta: { title: 'Login | UIC Cafe' }
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
      {
        name: 'BestSellersPage',
        path: '/bestsellers',
        component: () => import('../pages/BestSellersPage.vue'),
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('../pages/AboutPage.vue')
      },
      {
        path: '/myorders',
        name: 'HistoryPage',
        component: () => import('../pages/HistoryPage.vue'),
      },
    ],
  },

  {
    path: '/cart',
    name: 'CartPage',
    component: () => import('../pages/CartPage.vue'),
  },
  {
    path: '/cart/confirmed',
    name: 'ConfirmationPage',
    component: () => import('../pages/ConfirmationPage.vue'),
  },
];


const router = createRouter({
  history: createWebHistory(),
  base: process.env.NODE_ENV === 'production' ? '/' : '',
  routes,
});

export default router;
