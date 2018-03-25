import Vue from "vue";
import Router from "vue-router";
import Home from "../home/index.vue";
import Financial from '../financial/index.vue';
import Lous from '../lous/index.vue';
import '../../css/reset.scss'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/home",
            name: "home",
            component: Home,
        },
        {
            path: "/financial",
            name: "financial",
            component: Financial,
        },
        {
            path: "/",
            name: "lous",
            component: Lous,
        },
    ],
}) 
