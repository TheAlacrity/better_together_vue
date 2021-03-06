import Vue from 'vue';
import Router from 'vue-router';

import Signup from "./views/Signup.vue";
import Login from "./views/Login.vue";
import Logout from "./views/Logout.vue";

import UsersIndex from './views/UsersIndex.vue';
import UsersNew from './views/UsersNew.vue';
import UsersShow from './views/UsersShow.vue';
import UsersProfile from './views/UsersProfile.vue';
import UsersEdit from './views/UsersEdit.vue';

import ImagesNew from './views/ImagesNew.vue';

import MatchesIndex from './views/MatchesIndex.vue';

import HangoutsShow from './views/HangoutsShow.vue';

import MessagesIndex from './views/MessagesIndex.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  hash: false,
  routes: [
    {path: '/', name: 'home', component: Login },

    { path: "/signup", name: "signup", component: Signup },
    { path: "/login", name: "login", component: Login },
    { path: "/logout", name: "logout", component: Logout },

    { path: '/users', name: 'users-index', component: UsersIndex },
    { path: '/users/new', name: 'users-new', component: UsersNew },
    { path: '/users/:id', name: 'users-show', component: UsersShow },
    { path: '/users/:id/profile', name: 'users-profile', component: UsersProfile },
    { path: '/users/:id/edit', name: 'users-edit', component: UsersEdit },

    { path: '/images/new', name: 'images-new', component: ImagesNew },

    { path: '/matches', name: 'matches-index', component: MatchesIndex },

    { path: '/hangouts/:id', name: 'hangouts-show', component: HangoutsShow },

    { path: '/users/:id/messages', name: 'messages-index', component: MessagesIndex }
  ]
})
