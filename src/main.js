// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Promise from 'promise-polyfill';
import 'whatwg-fetch';
import Vue from 'vue';
import store from './store';
import App from './App';
import router from './router';

import './assets/css/base.css';
import './assets/css/iconfont.css';

if (!window.Promise) {
  window.Promise = Promise;
}

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
