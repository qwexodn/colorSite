

import Vue from 'vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from './views/Home';



const router = new VueRouter({
    mode:'history',
    routes:[
        {
            name:'home',
            component:Home,
            path:'/'
        }
    ]
});


export default router;