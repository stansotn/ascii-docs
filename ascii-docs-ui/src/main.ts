/**
 * Script entry point of the app.
 *
 * Stanislav Sotnikov (ssotnikov\@ccny.cuny.edu)
 */

import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { type Component } from "vue";

const app = createApp(App as Component);

app.use(router);

app.mount("#app");
var a: number = "hello";
