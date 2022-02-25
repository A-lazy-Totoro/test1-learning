import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import { router } from "../router/index";
import Http from "axios";
import "../api/mock";
import { store } from "../store/index";
const app = createApp(App);
app.use(ElementPlus);
app.use(store);
app.use(router);
app.config.globalProperties.$Http = Http;

app.mount("#app");
