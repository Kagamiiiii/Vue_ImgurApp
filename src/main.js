import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import vuexI18n from 'vuex-i18n';
import store from './store';
import translations from './translation/translations.js'
import AuthHandler from './components/AuthHandler';
import ImageList from './components/ImageList';
import UploadForm from './components/UploadForm';

Vue.use(VueRouter);
Vue.use(vuexI18n.plugin, store);
Vue.i18n.add('en', translations.translationsEn);
Vue.i18n.add('zh', translations.translationsZh);
Vue.i18n.set('zh');

export const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: ImageList},
    { path: '/upload', component: UploadForm},
    { path: '/oauth2/callback', component: AuthHandler },
  ]
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
