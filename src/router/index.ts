import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import TopMusic from '@/views/TopMusic.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'TopMusic',
    component: TopMusic,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '@/views/Register.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/Login.vue'),
  },
  {
    path: '/music',
    name: 'Music',
    component: () => import('@/components/pages/Music.vue'),
    props: (route) => (
      {
        id: route.query.id,
      }
    ),
  },
  {
    path: '/album',
    name: 'Album',
    component: () => import('@/components/pages/Album.vue'),
    props: (route) => (
      {
        id: route.query.id,
      }
    ),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
