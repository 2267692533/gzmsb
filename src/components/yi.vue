<template>
  <div>
      <shouye></shouye>
      <h1>欢迎使用华景酒店后台管理系统</h1>
  </div>
</template>

<script>
import shouye from '../components/shouye';
export default {
    components:{
    shouye
}
}
</script>

<style>
    h1{
        color: #666666;
        text-align: center;
        position: fixed;
        top: 360px;
        left: 40%;
    }
</style>