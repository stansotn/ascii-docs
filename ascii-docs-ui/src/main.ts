/**
 * Script entry point of the app.
 *
 * Stanislav Sotnikov (ssotnikov\@ccny.cuny.edu)
 */

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { type Component } from "vue";
import { initializeFirebaseApp } from "@/firebase-app";
// Vuetify imports
import "vuetify/styles";
import { createVuetify } from "vuetify";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import { connectFunctionsEmulator, getFunctions } from "firebase/functions";
import { connectDatabaseEmulator, getDatabase } from "firebase/database";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

initializeFirebaseApp();

connectAuthEmulator(getAuth(), "http://localhost:5001");
connectFunctionsEmulator(getFunctions(), "localhost", 5002);
connectDatabaseEmulator(getDatabase(), "localhost", 5003);

const app = createApp(App as Component);
const vuetify = createVuetify({ components, directives });

app.use(router);
app.use(vuetify);
app.mount("#app");
