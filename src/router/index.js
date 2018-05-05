import Vue from 'vue'
import Router from 'vue-router'//主路由文件
Vue.use(Router);//注册路由

//test
const home = r => require.ensure([], () => r(require('@/page/home/home')), 'home');
const about = r => require.ensure([], () => r(require('@/page/about/about')), 'about');
const life = r => require.ensure([], () => r(require('@/page/life/life')), 'life');
const doing = r => require.ensure([], () => r(require('@/page/doing/doing')), 'doing');
const share = r => require.ensure([], () => r(require('@/page/share/share')), 'share');
const homeClinder = r => require.ensure([], () => r(require('@/page/home/children/homeListCent')), 'homeClinder');
const lifeClind = r => require.ensure([], () => r(require('@/page/life/children/lifeClind.vue')), 'lifeClind');
const shareClind = r => require.ensure([], () => r(require('@/page/share/children/shareClind')), 'shareClind');
const dingClind = r => require.ensure([], () => r(require('@/page/doing/children/dingClid')), 'dingClind');
const traition = r => require.ensure([], () => r(require('@/page/transtion/transtion')), 'transtion');

const aa = r => require.ensure([], () => r(require('@/page/life/children/lifeClind.vue')), 'aa');
const bb = r => require.ensure([], () => r(require('@/page/share/children/shareClind')), 'bb');

//const home = r => require.ensure([], () => r(require('@/components/Home')), 'home');


export default new Router({
    mode: 'history',
    base: __dirname,
    routes: [
        {path: '/',name:'home',components: {
            default:home,
            left:shareClind, //自定义 组件 在 .vue文件中 用 name 调用
            right:lifeClind,
            aa:aa,
            bb:bb
        }},
        {path: '/home',name:'home', components: {
            default:home,
            left:shareClind,
            right:lifeClind
        }},
        // {path: '/home/:aaa/:bbbb',name:'home',component: home,alias:'bg',
        // {path: '/home',name:'home',component: home ,alias:'/bg',
        //   // children:[
        //   //     {  path: '/', name:'home', component: shareClind},
        //   //     {  path: 'homeClinder', name:'homeClinder', component: homeClinder},
        //   //     {  path: 'lifeClind', name:'lifeClind', component: lifeClind}
        //   // ]
        // },
        {path: '/share',name:'share', component: share,
            // children:[
            //     {  path: 'shareClind',name:'shareClind', component: shareClind},
            // ]
        },
        {path: '/about',name:'about', component: about,
            // children:[
            //     {  path: 'shareClind',name:'shareClind', component: shareClind},
            // ]
        },
        {path: '/traition',name:'traition', component: traition
        }
    ]
})
