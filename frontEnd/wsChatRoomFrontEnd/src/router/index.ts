import { createRouter, createWebHistory } from "vue-router";
import aboutView from "../views/aboutView.vue";
import chatroomView from "../views/chatroomView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: chatroomView,
        },
        {
            path: "/about",
            name: "about",

            component: aboutView,
        },
    ],
});

export default router;
