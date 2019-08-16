import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import vueLazyload from 'vue-lazyload';

Vue.config.productionTip = false

Vue.use( vueLazyload, { lazyComponent: true } );
Vue.use({
  install() {
    Vue.prototype.destroy = Vue.prototype.$destroy;
  },
});

new Vue({
  router,
  vuetify,
  vueLazyload,
  render: h => h(App)
}).$mount('#app')
