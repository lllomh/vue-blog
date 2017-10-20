import Vue from 'vue'
import Router from 'vue-router'



const home = r => require.ensure([], () => r(require('@/page/home/home')), 'home');
const about = r => require.ensure([], () => r(require('@/page/about/about')), 'about');
const life = r => require.ensure([], () => r(require('@/page/life/life')), 'life');
const doing = r => require.ensure([], () => r(require('@/page/doing/doing')), 'doing');
const share = r => require.ensure([], () => r(require('@/page/share/share')), 'share');
const homeClinder = r => require.ensure([], () => r(require('@/page/home/children/homeListCent')), 'homeClinder');
const lifeClind = r => require.ensure([], () => r(require('@/page/life/children/lifeClind.vue')), 'lifeClind');
const shareClind = r => require.ensure([], () => r(require('@/page/share/children/shareClind')), 'shareClind');
const dingClind = r => require.ensure([], () => r(require('@/page/doing/children/dingClid')), 'dingClind');

//const home = r => require.ensure([], () => r(require('@/components/Home')), 'home');

Vue.use(Router);
export default new Router({
    mode: 'history',
    base: __dirname,
    routes: [
        {path: '/home', component: home,
          children:[
              {  path: '/', name:'home', component: shareClind},
              {  path: 'homeClinder', name:'homeClinder', component: homeClinder},
              {  path: 'lifeClind', name:'lifeClind', component: lifeClind}
          ]
        },
        {path: '/share', component: share,
            children:[
                {  path: 'shareClind',name:'shareClind', component: shareClind},
            ]
        }
    ]
})


