<template>
  <div>
          <hede></hede>
      <transition name="fade">
          <router-view></router-view>
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


