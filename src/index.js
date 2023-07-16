import { createApp } from "vue";
import App from "./layouts/default.vue";
import Components from "@/components/index";
import Router from "@/router/router";
import "./index.css";

const app = createApp(App);

Components.forEach((component) => {
   app.component(component.name, component);
});

app.use(Router).mount("#app");
