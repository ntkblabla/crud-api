import Vue from "vue";
import Router from "vue-router";
import Home from './components/Home.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/profile',
      name: 'profile',
      // lazy-loaded
      component: () => import('./components/Profile.vue')
    },
    {
      path: "/exambanks",
      
      name: "exambanks",
      component: () => import("./components/Exam")
    },
    {
      path: "/addquestion",
      
      name: "addquestion",
      component: () => import("./components/AddQuestion")
    },
    {
      path: "/exambanks/:id",
      name: "exambank-details",
      component: () => import("./components/Exambank")
    },
    {
      path: "/users",
      alias: "/users",
      name: "users",
      component: () => import("./components/UserList")
    },
    {
      path: "/users/:id",
      name: "user-details",
      component: () => import("./components/User")
    },
    {
      path: "/start",
      
      name: "start",
      component: () => import("./components/Start")
    }
  ]
});