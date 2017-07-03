<template>
  <div class="ui progress" :class="attached" v-bind:data-percent="percent">
    <div class="bar"> 
      <div class="progress" v-if="!attached">{{percent}}%</div>
    </div>
    <div class="label" v-if="text">{{text}}</div>
  </div>
</template>

<script>
  export default {
    name: 'u-progress',
    props: {
      percent: {
        type: Number,
        default: 0
      },
      text: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        attached: ''
      }
    }
  }
</script>
