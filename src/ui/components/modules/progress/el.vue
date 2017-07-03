<template>
  <div>
    <h1>progess examples</h1>
    <div v-progress="true"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        percent: 20
      }
    },
    mounted () {
      console.log(this.$progess)
    }
  }
</script>
