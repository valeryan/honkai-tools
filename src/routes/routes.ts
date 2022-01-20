import HomePage from "../components/HomePage.vue";
import ElysianRealm from "../components/ElysianRealm.vue";

const NotFound = { template: "<div>404 Not Found</div>" };

export const mainRoutes = [
  { path: "/", component: HomePage },
  { path: "/elysian-realm", component: ElysianRealm },
  {
    path: "/elysian-realm/:slug",
    name: "ElysianRealm",
    component: ElysianRealm,
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
    name: "NotFound",
  },
];
