<template>
  <div>
    子组件:
    <span>{{childValue}}</span>
    <input type="button" value="点击触发" @click="childClick">
  </div>
</template>
<script>
  export default {
    data () {
      return {
        childValue: '我是子组件的数据'
      }
    },
    methods: {
      childClick () {
        this.$emit('childByValue', this.childValue)
      }
    }
  }
</script>