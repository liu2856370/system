<template>
  <div>
    <PHeader rightText="退出" @rightClick="loginOut">个人中心</PHeader>
    <van-form @submit="onSubmit">
      <p class="modifyPassword">修改密码</p>
      <van-field v-model="password" name="用户名" placeholder="请输入新密码" :rules="[{ required: true, message: '请输入新密码' }]" />
      <van-field v-model="newPassword" type="password" name="密码" placeholder="请输入确认密码" :rules="[{ required: true, message: '请输入确认密码' }]" />
      <div style="margin: 16px;text-align: center;">
        <van-button round type="info" @click="goBack">取消</van-button>
        <van-button round type="info" native-type="submit" class="ml10">提交</van-button>
      </div>
    </van-form>
    <van-tabbar v-model="activeTabbar">
      <van-tabbar-item icon="wap-home-o" to="/platform">首页</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/user-center">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import PHeader from "../../components/PHeader";
export default {
  components: {
    PHeader
  },
  data() {
    return {
      activeTabbar: 1,
      password:"",
      newPassword:""
    };
  },
  methods: {
    loginOut() {
      this.$router.replace({ path: "/login" });
    },
    onSubmit(values) {
      console.log('submit', values);
    },
    goBack(){
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.modifyPassword{
  line-height: 50px;
  padding-left: 17px;
}

.ml10{
  margin-left: 10px;
}

.van-button{
  width: 1.5rem;
}
</style>