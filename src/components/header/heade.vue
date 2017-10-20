<template>
    <header id="head_top">
        <div id="logo"><a href="/"></a></div>
        <nav class="topnav" id="topnav">

            <p>路由name={{$route.name}}</p>

            <router-link to="/home"><span>首页de </span><span class="en">Protal</span></router-link>

            <router-link :to="{name:'homeClinder',params:{id:1212}}"><span>首页zitanch</span><span class="en">111</span></router-link>

            <router-link :to="{name:'lifeClind',params:{id:'fxbgfgdgdsgfds'}}"><span>首页zitanch</span><span class="en">111</span></router-link>

            <router-link to="/about"><span>关于我</span><span class="en">About</span></router-link>

            <router-link to="/life"><span>慢生活</span><span class="en">Life</span></router-link>

            <router-link to="/doing"><span>碎言碎语</span><span class="en">Doing</span></router-link>

            <router-link to="/share"><span>模板分享</span><span class="en">Share</span></router-link>

        </nav>
    </header>
</template>

<script>
    export default {
        name:'header',
        data(){
            return{

            }
        },
    methods: {

    }

    }


</script>

<style scoped>
    @import url('../../style/global.css');

</style>