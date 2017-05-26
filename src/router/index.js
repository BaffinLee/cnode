import Vue from 'vue';
import Router from 'vue-router';
import list from '@/views/home';
import topic from '@/views/topic';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: list,
    },
    {
      path: '/t/:id/:reply?',
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

router.afterEach(() => {
  window.scroll(0, 0);
});

export default router;
