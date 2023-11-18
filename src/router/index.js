import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../components/LoginPage.vue";
import MainPage from "../components/MainPage.vue";

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
        path: '', // This represents the default sub-route for /menu
        name: 'MenuPage',
        component: () => import('../main_components/main_content.vue'), // You can create a default component for the main_content
      },
      {
        path: '/menu/drinks/hotcoffees',
        name: 'hotcoffees',
        component: () => import('../components/category_drinks/hotcoffees.vue'),
      },
      // Add more child routes for other categories
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
