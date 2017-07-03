<template>
  <div class="dimmer">{{text}}</div>
</template>

<script>
  export default {
    data () {
      return {
        text: ''
      }
    },
    name: 'u-dimmer',
    methods: {
      setText (val) {
        this.text = val
      }
    }
  }
</script>
