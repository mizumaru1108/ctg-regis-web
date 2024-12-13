import "./bootstrap";
import { createApp } from "vue";
import "./../css/app.css"; // Import Tailwind styles

import App from "./App.vue"; // Renamed to `App` for clarity
import { createPinia } from "pinia";

// CREATE APP INSTANCE
const app = createApp(App);

// REGISTER PINIA
const pinia = createPinia();
app.use(pinia);

// MOUNT APP
app.mount("#app");
