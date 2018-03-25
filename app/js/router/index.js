import Vue from "vue";
import Router from "vue-router";
import Home from "../home/index.vue";
import Financial from '../financial/index.vue';
import Lous from '../lous/index.vue';
import Download from '../active/download.vue';
import '../../css/reset.scss'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },
        {
            path: "/financial",
            name: "financial",
            component: Financial,
        },
        {
            path: "/lous",
            name: "lous",
            component: Lous,
        },
        {
            path: "/download",
            name: "download",
            component: Download,
        },
    ],
}) 
