<template>
  <div>
    <img alt="Vue logo" src="@/assets/logo.png">
    <button @click="gotoMenu">菜单页面</button>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
  import HelloWorld from '@/components/HelloWorld.vue'

  export default {
    name: 'app',
    components: {
      HelloWorld
    },
    methods:{
      gotoMenu(){
        this.$router.push({path:"/slidIndex"});
      }
    }
  }
</script>

<style>
  button{
    display: flex;
    background: aqua;
    width: 100%;
    color: #42b983;
    height: 40px;
    line-height: 40px;
    justify-content: center;
    border: none;
  }
</style>
