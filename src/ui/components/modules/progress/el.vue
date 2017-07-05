<template>
  <div>
    <h1>progess examples</h1>
    <div v-progress="true"></div>
    <div v-anime="handle" class="box-red"></div>
    <div class="box-blue" v-anime="animeHandle"></div>
    <div v-anime.els="lists">
      <div class="box-green"></div>
      <div class="box-green"></div>
      <div class="box-green"></div>
    </div>
    <div v-anime.els="lists">
      <div class="box-green"></div>
      <div class="box-green"></div>
      <div class="box-green"></div>
    </div>
    <input v-anime="handleText" :value="percent">
  </div>
</template>

<script>
  export default {
    mounted () {
      this.$btn.show({
        type: 'alert'
      })
    },
    data () {
      return {
        percent: 20,
        animeHandle: {
          translateX: 250,
          direction: 'alternate',
          loop: true,
          autoplay: true,
          delay: function (el, i, l) {
            return i * 100
          }
        }
      }
    },
    methods: {
      iconHandle (e) {
      },
      handleText (el) {
        el.options({
          value: 100,
          easing: 'linear'
        })
      },
      handle (el) {
        el.options({
          translateX: 300,
          direction: 'alternate',
          loop: 3,
          autoplay: false
        }).delay(1000).play()
      },
      lists (el) {
        el.options({
          translateX: 400,
          direction: 'alternate',
          loop: 4,
          delay: function (e, i, l) {
            return i * 200
          }
        })
      }
    }
  }
</script>

<style>
  .box-red {
    height: 40px;
    width: 40px;
    background-color: red;
  }
  .box-blue {
    height: 40px;
    width: 40px;
    background-color: blue;
  }
  .box-green {
    height: 40px;
    width: 40px;
    background-color: green;
  }
</style>
