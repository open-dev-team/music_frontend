import Vue from 'vue';

Vue.config.errorHandler = (err, vm, info) => {
  // err: error trace
  // vm: component in which error occured
  // info: Vue specific error information such as lifecycle hooks, events etc.
  console.error('vue-error-handler:', info);
  console.log('error-system-message:', err);
  console.warn('error-vue-component:', vm);
};
