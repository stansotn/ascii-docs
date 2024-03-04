import { createRouter, createWebHistory } from "vue-router";
import { type Component } from "vue";
import UserAuth from "@/views/UserAuth.vue";
import AuthSuccess from "@/views/AuthSuccess.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/success",
            name: "success",
            component: AuthSuccess as Component,
        },
        {
            path: "/auth",
            name: "auth",
            component: UserAuth as Component,
        },
    ],
});

export default router;
