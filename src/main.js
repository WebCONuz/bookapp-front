import { createApp } from "vue";
import { createPinia } from "pinia";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import "nprogress/nprogress.css";

import App from "./App.vue";
import router from "./router";

// options for toast
const options = {
  position: "top-right",
  timeout: 5000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: false,
  closeButton: "button",
  icon: true,
  rtl: false,
  transition: "Vue-Toastification__fade",
  maxToasts: 20,
  newestOnTop: true,
};

// css file
import "./assets/css/main.css";

// create app
const app = createApp(App);

app.use(Toast, options);
app.use(createPinia());
app.use(router);

app.mount("#app");
