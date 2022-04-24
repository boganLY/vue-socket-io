import { createApp } from "vue";
import App from "./App.vue";
import Antd from "ant-design-vue";
import TestPage from "./components/TestPage.vue";
import "ant-design-vue/dist/antd.css";

const app = createApp(App);

app.use(Antd);
app.component("test-page", TestPage);
app.mount("#app");
