<template>
  <div>
    父组件:
    <span>{{name}}</span>
    <br>
    <br>
    <child v-on:childByValue="childByValue"></child>
  </div>
</template>
<script>
import chaungfu from '../components/chaungfu'
  export default {
    components: {
      chaungfu
    },
    data () {
      return {
        name: ''
      }
    },
    methods: {
      childByValue: function (childValue) {
        this.name = childValue
      }
    }
  }
</script>