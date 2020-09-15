<template>
  <div id="app">
    <router-view />
    <LoadingComponent></LoadingComponent> 
  </div>
</template>
<script>
import LoadingComponent from "./plugins/custom/LoadingComponent.vue"
export default {
    name: "app",
    components:{
        LoadingComponent
    }
}
</script>
<style>
@import './common/less/index.less';
html,
body,
#app {
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
