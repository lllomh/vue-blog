<template>
  <div>
          <hede></hede>
      <transition name="fade">
          <router-view class="ss"></router-view>
      </transition>
         <fote></fote>
  </div>
</template>

<script>

import hede from './components/header/heade'
import fote from './components/footer/footer'
export default {
  name: 'app',
  components:{
      hede,
      fote
  }
}
</script>
<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity 3.9s;
    }
    .fade-enter, .fade-leave-active {
        opacity: 0;
    }
</style>

