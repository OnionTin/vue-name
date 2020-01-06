import Vue from 'vue';
import App from './App.vue'; //单页面应用,定义全局
import router from "./router"; //引用路由
import Element from "element-ui"; //引用element-ui组件
import 'element-ui/lib/theme-chalk/index.css'; //引用elemen-ui组件
Vue.use(Element,{ size: 'small', zIndex: 3000 }); //当前的Vue对象,要用到Element

Vue.config.productionTip = false

new Vue({
  router, //当前的Vue对象,要用到Element路由
  render: h => h(App),
}).$mount('#app')
