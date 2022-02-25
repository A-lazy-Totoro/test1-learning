import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../views/MainNode.vue"),
      children: [
        {
          path: "/Home",
          component: () => import("../views/HomeContent.vue"),
        },
        {
          path: "/User",
          component: () => import("../views/UserContent.vue"),
        },
        {
          path: "/Shop",
          component: () => import("../views/ShopContent.vue"),
        },
        {
          path: "/Setting",
          component: () => import("../views/SettingContent.vue"),
        },
      ],
    },
  ],
});
