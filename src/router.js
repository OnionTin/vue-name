import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import index from "@/views/index"
import slidIndex from "@/views/Menu/index";
import slidFir from "@/views/Menu/slidFir";
let router = new VueRouter({
  routes: [
    {
      path: "",
      component: index,
      children: [
        {
          path: "/",
          name: "index",
          component: index
        }
      ]
    },
    {
      path: "/slidIndex",
      component: slidIndex,
      children: [
        {
          path: "/",
          name: "slidFir",
          component: slidFir,
          meta: {
            tabStatus: 0,
            title: "菜单页面"
          }
        }
      ]
    },
  ]
});
export default router; //在main里边注册
