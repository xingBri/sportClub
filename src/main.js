// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import MuseUI from 'muse-ui';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import $ from 'webpack-zepto';
import Index from './views/list';
import routes from './routers';
// import FastClick from 'fastclick';
import store from './vuex/store';
import 'muse-ui/dist/muse-ui.css';
import 'muse-ui/dist/theme-light.css';

Vue.use(MuseUI);
Vue.use(VueResource);
Vue.use(VueRouter);

// FastClick.attach(document.body);
$.ajaxSettings.crossDomain = true;

if (window.sessionStorage.user) {
    store.dispatch('setUserInfo', JSON.parse(window.sessionStorage.user));
}
if (window.sessionStorage.info) {
    store.dispatch('setNotiNum', window.sessionStorage.info);
}

const router = new VueRouter({
	// mode: 'history',
	routes
});

//Navigation Guards -check logined or not
router.beforeEach((to, from, next) => {
    console.log(to);
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (store.state.user.userInfo.userId) {
            next();
        } else {
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            });
        }
    } else {
        next();
    }
});

/* eslint-disable no-new */
new Vue({
  router,
  store
}).$mount('#app');
