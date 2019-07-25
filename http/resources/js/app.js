
import 'babel-polyfill';
import 'whatwg-fetch';

import './bootstrap';
import Vue from 'vue';
import Router from './router';

import Main from './Main.vue';



const app = new Vue({
    el:'#app',
    router:Router,
    render: h=> h(Main)
})