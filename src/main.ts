import './main.css';

import { OhVueIcon, addIcons } from 'oh-vue-icons';
import { BiSearch } from 'oh-vue-icons/icons';
import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import BookPage from './components/BookPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/book/:id', component: BookPage }
  ]
});

addIcons(BiSearch);

import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);
app.component('v-icon', OhVueIcon);
app.use(router);
app.mount('#app');
