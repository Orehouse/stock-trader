import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import vClickOutside from 'v-click-outside'

import {routes} from './routes'
import store from './store/store'

Vue.use(vClickOutside)
Vue.use(VueRouter);
Vue.use(VueResource);


Vue.http.options.root = 'https://vue-js-stock-trade.firebaseio.com/';

Vue.filter('currency', (value) => {
  return `$${value.toLocaleString()}`;
});

const router = new VueRouter({
  mode: "history",
  routes
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
