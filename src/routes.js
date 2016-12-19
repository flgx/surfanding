import Home from './components/Home.vue';
import Products from './components/products/Products.vue';
import Profile from './components/users/Profile.vue';

export const routes = [
    { path: '/', component: Products },
    { path: '/profile', component: Profile }
];