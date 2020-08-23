import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/user/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/app/pages/login.vue')
  },
  {
    path: '/user/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "register" */ '../views/app/pages/register.vue')
  },
  {
    path: '/user/profile',
    name: 'profile',
    component: () => import(/* webpackChunkName: "profile" */ '../views/app/pages/profile.vue')
  },
  /*{
    path: '/user/',
    component: () => import('../views/app/index.vue'),
    redirect: "/home",
    children: [
      // UserProfile will be rendered inside User's <router-view>
      // when /user/:id/profile is matched
      {
        path: 'login',
        component: () => import('../views/app/pages/login.vue')
      },
      {
        path: 'register',
        component: () => import('../views/app/pages/register.vue')
      },
      {
        path: 'profile',
        component: () => import('../views/app/pages/profile.vue')
      },
    ]
  },*/

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
