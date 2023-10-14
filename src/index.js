import { createApp } from "vue";
import { createPinia } from 'pinia'
import App from "./layouts/default.vue";
import Components from "@/components/index";
import Router from "@/router/router";
import "./index.css";

const app = createApp(App);
const pinia = createPinia()

Components.forEach((component) => {
   app.component(component.name, component);
});

app.use(Router).use(pinia).mount("#app");
