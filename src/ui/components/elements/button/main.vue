<template>
  <div class="button">button</div>
</template>

<script>
  export default {
    name: 'u-button',
    data () {
      return {
        type: ''
      }
    },
    mounted () {
      console.log(this.type)
    }
  }
</script>
