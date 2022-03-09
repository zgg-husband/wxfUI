import Vue from 'vue'
import App from './App.vue'
// import "../components/css/card.scss"
// import Card from "../components/lib/card/index.js"
// Vue.use(Card)
import "wmr-ui-test/dist/css/index.css";
import WUI from 'wmr-ui-test';
Vue.use(WUI)
// console.log(WUI.Card,"Wui")
// import "wmr-ui-test/dist/css/index.css";
// import Card from 'wmr-ui-test/dist/card.umd.js';
// Vue.use(Card)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
