import { createRouter, createWebHistory } from "vue-router";

const routes = [
   {
      path: "/",
      name: "app",
      component: () => import("@/pages/index.vue"),
   },
   {
      path: "/:id",
      name: "post",
      component: () => import("@/pages/post.vue"),
   },
   {
      path: "/404",
      name: "404",
      component: () => import("@/pages/error.vue"),
   },
   {
      path: "/:pathMatch(.*)*",
      redirect: "/404",
   },
];

const router = createRouter({
   history: createWebHistory(),
   routes,
   scrollBehavior() {
      return new Promise((resolve) => {
         setTimeout(() => {
            resolve({ el: "#app", left: 0, top: 0, behavior: "smooth" });
         }, 200);
      });
   },
});

export default router;
