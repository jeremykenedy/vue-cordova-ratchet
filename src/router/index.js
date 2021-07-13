import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'

import Welcome from '../views/pages/Welcome.vue'
import Home from '../views/pages/Home.vue'
import About from '../views/pages/About.vue'
import Login from '../views/pages/Auth/Login.vue'
import Register from '../views/pages/Auth/Register.vue'

import Profile from '../views/pages/Profile.vue'
import Account from '../views/pages/Account.vue'
import Settings from '../views/pages/Settings.vue'

import middlewarePipeline from './middlewarePipeline'
import auth from '@/middleware/auth'
import subscribed from '@/middleware/subscribed'
import guest from '@/middleware/guest'

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: Welcome,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    // meta: {
    //   middleware: [auth]
    // }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      middleware: [guest]
    }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: {
      middleware: [guest]
    }
  },

  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    // meta: {
    //   middleware: [auth]
    // }
  },
  {
    path: '/account',
    name: 'account',
    component: Account,
    // meta: {
    //   middleware: [auth]
    // }
  },
  {
    path: '/settings',
    name: 'settings',
    component: Settings,
    // meta: {
    //   middleware: [auth]
    // }
  },



];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {

  if (!to.meta.middleware) {
    return next();
  }

  const middleware = to.meta.middleware;

  const context = {
    to,
    from,
    store,
    next
  }

  return middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1)
  });
});

export default router
