import Vue from "vue";
import VueRouter from "vue-router";
//import Es6 from '../views/es6/index.vue'

Vue.use(VueRouter);
import Layout from "@/layout";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Layout,
    redirect: "/index",
    children: [
      {
        path: "index",
        name: "index",
        component: () => import("@/views/home/index"),
        meta: { title: "首页", icon: "el-icon-s-home" },
      },
    ],
  },

  {
    path: "/es6",
    component: Layout,
    meta: { title: "ES6", icon: "el-icon-s-home" },
    children: [
      
          {
            path: "array",
            component: () => import("@/views/es6/array"),
            name: "array",
            meta: { title: "数组" },
            
          },
          {
            path: "time",
            component: () => import("@/views/es6/index"),
            name: "Menu1-2",
            meta: { title: "时间" },
           
          },
        
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
