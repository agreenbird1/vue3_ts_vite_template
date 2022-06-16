import { createApp } from "vue";
import store from "./store";
import App from "./App.vue";
import "@/test/testAxios";

const app = createApp(App);
app.use(store);
app.mount("#app");
