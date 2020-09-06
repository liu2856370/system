<template>
  <div class="home">
    <div class="nav">
      <router-link
        to="/info"
        class="info"
      >信息公示查询</router-link>
      <router-link
        to="/platform"
        class="platform"
      >业务办理平台</router-link>
    </div>
  </div>
</template>
<script>
export default {
      name: 'home'
}
</script>

<style>
#app .home {
  height: 100%;
}
.home {

  background: url("../../common/images/home-bg.png") no-repeat center;
}
.nav {
  font-size: 0.2rem;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-left: -1.5rem;
  margin-top: -0.7rem;
}
.nav a {
  display: block;
  float: left;
  width: 1.5rem;
}
.nav a::before {
  display: block;
  content: "";
  width: 0.9rem;
  height: 0.9rem;
  margin-left: 0.3rem;
  background: no-repeat center;
  background-size: 100% 100%;
}
.nav a.info::before {
  background-image: url("../../common/images/home-icon-infoQuery.png");
}
.nav a.platform::before {
  background-image: url("../../common/images/home-icon-platform.png");
}
</style>
