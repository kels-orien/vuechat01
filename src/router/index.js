/*eslint-disable*/

import Router from 'vue-router';
import Auth from '../components/Auth.vue';
import Chat from '../components/Chat.vue';


const router = new Router({
    routes: [
        { path: '/', component: Auth },
        { path: '/auth', component: Auth },
        { path: '/chat', component: Chat }
    ]
});

export default router;