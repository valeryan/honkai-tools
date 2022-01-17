import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';

const Home = { template: '<div>Home</div>' };
const About = { template: '<div>About</div>' };
const NotFound = { template: '<div>404 Not Found</div>' }

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound,
    name: 'NotFound'
  }

];

const base = import.meta.env.BASE_URL;

console.log(base);

const router = createRouter({
  history: createWebHashHistory(base),
  routes,
});

const app = createApp(App);

app.use(router)
app.mount('#app');
