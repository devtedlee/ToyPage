import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "HelloWorldView",
    component: () => import("./views/HelloWorldView.vue"),
  },
  {
    path: "/board",
    name: "BoardView",
    component: () => import("./views/BoardView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
