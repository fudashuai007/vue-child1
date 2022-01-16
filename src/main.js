import './public-path'
import Vue from 'vue'
import App from './App.vue'
import routes from './router'
import VueRouter from 'vue-router'
import store from './store'
Vue.config.productionTip = false;
let router = null
let instance = null


function render({ container } = {}) {
  router = new VueRouter({
    mode: 'history',
    routes: routes,
    base: window.__POWERED_BY_QIANKUN__ ? '/childApp' : '/'
  })
  instance = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount(container ? container.querySelector('#childApp') : '#childApp')
}


// if (window.__POWERED_BY_QIANKUN__) {
//   ___webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__
// }
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

export async function bootstrap(props){
  console.log(props);

}
export async function mount(props) {
  render(props)
}

export async function unmount(props){
  console.log(props);
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  router = null;
}
// new Vue({
//   router,
//   store,
//   render: (h) => h(App),
// }).$mount('#app')
