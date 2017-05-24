import Vue from 'vue';
import Router from 'vue-router';
import list from '@/views/home';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'List',
      component: list,
    },
  ],
});
