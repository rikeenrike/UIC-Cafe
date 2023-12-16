import { createApp } from 'vue';
import './style.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import PrimeVue from 'primevue/config';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Button from 'primevue/button';
import Toast from 'primevue/toast';
import App from './App.vue';
import ToastService from 'primevue/toastservice';
import router from './router';
import Breadcrumb from 'primevue/breadcrumb';
import Divider from 'primevue/divider';
import Card from 'primevue/card';
import Sidebar from 'primevue/sidebar';
import OverlayPanel from 'primevue/overlaypanel';
import Dialog from 'primevue/dialog';

import AnimateOnScroll from 'primevue/animateonscroll';
                


import 'bootstrap-icons/font/bootstrap-icons.css';


const app = createApp(App);
app.use(PrimeVue, {ripple: true});
app.use(ToastService);
app.use(router);

app.component('Dialog', Dialog);
app.directive('animateonscroll', AnimateOnScroll);
app.component('OverlayPanel', OverlayPanel);
app.component('Card', Card);
app.component('Divider', Divider);
app.component('Breadcrumb', Breadcrumb);
app.component('InputText', InputText);
app.component('Password', Password);
app.component('Button', Button); 
app.component('Toast', Toast);     
app.component('Sidebar', Sidebar);

app.mount('#app');
