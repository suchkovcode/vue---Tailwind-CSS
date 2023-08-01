import { createRouter, createWebHistory } from "vue-router";

const routes = [
   {
      path: "/",
      name: "app",
      component: () => import("null"),
   },
   {
      path: "/404",
      name: "404",
      component: () => import("404"),
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
            resolve({ el: "#root", left: 0, top: 0, behavior: "smooth" });
         }, 200);
      });
   },
});

export default router;
