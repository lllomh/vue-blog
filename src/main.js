// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from '@/router/index'//导入自定义路由文件

Vue.config.productionTip = false;

/* eslint-disable no-new */
//new Vue({
//  el: '#app',
//  router,
//  template: '<App/>',
//  components: { App }
//})



new Vue({
    el: '#app',
    router,
    render: h => h(App),




    beforeCreate:function(){
        console.log("1.初始化之后========");
        console.log(this.data)
        console.log(this.$el)
    },
    created:function(){
        console.log("2.创建完成========");
        console.log(this.info);
        console.log(this.$el)
    },
    beforeMount:function(){
        console.log("3.挂载之前========");
        console.log(this.info);
        console.log(this.$el)
    },
    mounted:function(){
        console.log("4.被创建完成========");
        console.log(this.info);
        console.log(this.$el)
    },
    beforeUpdate:function(){
        console.log("5.数据更新前========");

    },
    updated:function(){
        console.log("6.更新完成========");
    },
    activated:function () {
        console.log("7.7-activated========")
    },
    deactivated:function () {
        console.log("8.8-activated========")
    },
    beforeDestroy:function(){
        console.log("9.销毁前========");
        console.log(this.info)
        console.log(this.$el)
    },
    destroyed:function(){
        console.log("10.已销毁========");
        console.log(this.info)
        console.log(this.$el)
    }
});

//Vue.use(VueRouter);
