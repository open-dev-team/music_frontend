import FlagIcon from 'vue-flag-icon';
import i18n from '@/plugins/i18n/i18n';
import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import '@/plugins/index';

import 'material-icons/iconfont/material-icons.css';

import '@/styles/main.scss';

Vue.use(FlagIcon);

Vue.config.productionTip = false;

new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
