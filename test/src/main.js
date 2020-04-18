import Vue from 'vue'
import App from './App.vue'
import Framework7 from 'framework7/dist/framework7.esm.bundle';
import  Framework7Vue from 'framework7-vue/dist/framework7-vue.esm.bundle';
// import Framework7Theme from "framework7/dist/css/framework7.md.css";

Vue.config.productionTip = false
Vue.use(Framework7Vue, Framework7)
new Vue({
  render: h => h(App),
  components: { App },
  framework7: {
    root: '#app',
  },
}).$mount('#app')
