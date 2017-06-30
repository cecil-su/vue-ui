<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    mounted () {
      console.log('mounted')
    }
  }
</script>

<style lang="stylus">
  body 
    background-color #f0f0f0
</style>