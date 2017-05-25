import Vue from 'vue';
import Router from 'vue-router';
import list from '@/views/home';
import topic from '@/views/topic';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: list,
    },
    {
      path: '/t/:id',
      name: 'topic',
      component: topic,
    },
    {
      path: '/:tab',
      name: 'tab',
      component: list,
    },
  ],
});
