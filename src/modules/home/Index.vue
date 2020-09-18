<template>
  <div class="home">
    <div class="govTitle"> <router-link to="/demo">山东市场监管行政许可管理系统</router-link> </div>
    <div class="nav">
      <router-link
        to="/info"
        class="info"
      >信息公示查询</router-link>
      <router-link
        to="/login"
        class="platform"
      >业务办理平台</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "home",
  created(){
   /* 
    请求示例            

  client.rpc("/xxgs/findGcxx",{id:"1111"}).then(res=>{
      console.log(res);
    });
    client.rpc("/dic/getArea",{}).then(res=>{
      console.log(res);
    });*/
  }
}
</script>

<style scoped>
.govTitle {
  top: 0.76rem;
  width: 100%;
  font-size: 0.2rem;
  font-weight: bold;
  color: #000;
  position: fixed;
  text-align: center;
}
.govTitle::before {
  display: block;
  content: "";
  width: 0.95rem;
  height: 1.03rem;
  background: url("../../assets/home/icon-markeyManager.png") no-repeat center;
  background-size: 100% 100%;
  margin-left: 1.6rem;
  margin-bottom: 0.15rem;
}
.home {
  height: 100%;
  background: url("../../assets/home/home-bg.png") no-repeat center;
  background-size: 100% 100%;
}
.nav {
  font-size: 0.2rem;
  position: fixed;
  top: 2.7rem;
  left: 50%;
  margin-left: -1.5rem;
}
.nav a {
  display: block;
  float: left;
  width: 1.5rem;
  line-height: 0.4rem;
  color: #000;
  text-align: center;
}
.nav a::before {
  display: block;
  content: "";
  width: 0.9rem;
  height: 0.9rem;
  margin-left: 0.3rem;
  background: no-repeat center;
  background-size: 100% 100%;
  margin-bottom: 0.1rem;
}
.nav a.info::before {
  background-image: url("../../assets/home/home-icon-infoQuery.png");
}
.nav a.platform::before {
  background-image: url("../../assets/home/home-icon-platform.png");
}
</style>
