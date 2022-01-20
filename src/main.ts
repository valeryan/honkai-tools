import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";
import { mainRoutes } from "./routes/routes";

// import Bootstrap
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const base = import.meta.env.BASE_URL;

console.log(base);

const router = createRouter({
  history: createWebHashHistory(base),
  routes: mainRoutes,
});

const app = createApp(App);

app.use(router);
app.mount("#app");
