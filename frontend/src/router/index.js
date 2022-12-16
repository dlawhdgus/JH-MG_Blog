import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: () => import("../components/page/HomeView"),
  },
  {
    path: "/login",
    name: "LoginView",
    component: () => import("../components/page/LoginView"),
  },
  {
    path: "/publish",
    name: "PublishView",
    component: () => import("../components/page/PublishView"),
  },
  // {
  //   path: "/articles/:id",
  //   name: "ArticlesArticle",
  //   component: () => import("../views/ArticlesArticle.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
