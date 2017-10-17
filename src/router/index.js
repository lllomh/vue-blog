import Vue from 'vue'
import Router from 'vue-router'



const home = r => require.ensure([], () => r(require('@/page/home/home')), 'home');
const about = r => require.ensure([], () => r(require('@/page/about/about')), 'about');
const life = r => require.ensure([], () => r(require('@/page/life/life')), 'life');
const doing = r => require.ensure([], () => r(require('@/page/doing/doing')), 'doing');
const share = r => require.ensure([], () => r(require('@/page/share/share')), 'share');
//const home = r => require.ensure([], () => r(require('@/components/Home')), 'home');

Vue.use(Router);
export default new Router({
    mode: 'history',
    base: __dirname,
    routes: [
        { path: '', component: home },
        { path: '/about', component: about },
        { path: '/life', component: life },
        { path: '/doing', component: doing},
        { path: '/share', component: share }
    ]
})

