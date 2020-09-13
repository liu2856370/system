<template>
  <div id="app">
    <router-view />
    <OverLayPage isShow="false"></OverLayPage> 
  </div>
</template>
<script>
import OverLayPage from "./components/OverLayPage"
export default {
    name: "app",
    components:{
        OverLayPage
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
