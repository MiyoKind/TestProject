import Vue from "vue";
import VueRouter from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import TestComp from "@/components/TestComp";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: HelloWorld
    },
    {
        path: '/my-project',
        component: TestComp
    }
]

export default new VueRouter({
    mode: 'history',
    routes
})