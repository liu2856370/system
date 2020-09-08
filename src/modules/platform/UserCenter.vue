<template>
  <div>
    <PHeader rightText="退出" @rightClick="loginOut">个人中心</PHeader>

    <van-tabbar v-model="activeTabbar">
      <van-tabbar-item icon="wap-home-o" to="/platform">首页</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/user-center">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import PHeader from "../../components/PHeader"
export default {
    components:{
        PHeader
    },
    data(){
        return{
            activeTabbar:1
        }
    },
    methods:{
        loginOut(){
            this.$router.replace({path: '/login'});
        }
    }
}
</script>

<style scoped>

</style>