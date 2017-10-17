<template>
  <div class="Hi">
   <h1>{{msg}}</h1>
  </div>
</template>

<script>
export default {
  name: 'Hi',
  data () {
    return {
      msg: '3434343434343434'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
