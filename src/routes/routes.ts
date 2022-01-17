import Home from '../components/Home.vue'
import ElysianRealm from '../components/elysian-realm/ElysianRealm.vue'

const NotFound = { template: '<div>404 Not Found</div>' }

export const mainRoutes = [
  { path: '/', component: Home },
  { path: '/elysian-realm', component: ElysianRealm },
  { path: '/elysian-realm/:slug', name: 'ElysianRealm', component: ElysianRealm },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound,
    name: 'NotFound'
  }
];
