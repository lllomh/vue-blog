<template>
    <div>
        <button v-on:click="show = !show">
            wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
        </button>
        <transition name="fade">
        <p v-if="show">dddddddddddddddddddd</p>
        </transition>
    </div>








</template>

<script>

    export default{
        name:"dome",
        data(){
            return{
                show:true
            }
        }


    }

</script>

<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity 3.9s;
        background: red;
    }
    .fade-enter, .fade-leave-active {
        opacity: 0;
        background: blue;
    }
</style>
