import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "layout",
      component: () => import("@/views/Layout.vue"),
    },
  ],
});

export default router;
