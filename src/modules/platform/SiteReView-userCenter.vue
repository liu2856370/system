<template>
  <div>
    <PHeader :showArrow="true">个人信息</PHeader>
    <van-cell-group>
      <van-cell
        title="登录账号"
        value="zhangling"
      />
      <van-cell
        title="登录密码"
        value="修改密码>>"
        value-class="color-blue"
      />
      <van-cell
        title="姓名"
        value="张三"
      />
      <van-cell
        title="身份证"
        value="4900392019394883728283"
      />
      <van-cell
        title="性别"
        value="男"
      />
      <van-cell
        title="生日"
        value="1939-4-8"
      />
      <van-cell
        title="工作单位"
        value="山东省化肥工业总公司"
      />
      <van-cell
        title="工作单位类型"
        value="非企业"
      />
      <van-cell
        title="单位负责人"
        value="范主任"
      />
      <van-cell
        title="负责人联系方式"
        value="13688887777"
      />
      <van-cell
        title="注册号"
        value="GSD-009187"
      />
      <van-cell
        title="手机"
        value="13688889999"
      />
      <van-cell
        title="其他联系方式"
        value="0531-88761528"
      />
      <van-cell
        title="通讯地址"
        value="济南市历城区80号"
      />
      <van-cell
        title="邮政编码"
        value="250001"
      />
      <van-cell
        title="电子邮箱"
        value="123456789@sina.com"
      />
      <van-button
        type="danger"
        round
        size="large"
        class="btn-exit"
        to="/login"
      >退出</van-button>
    </van-cell-group>
  </div>
</template>
<script>
import Vue from "vue";
import PHeader from "../../components/PHeader.vue";
import { Cell, CellGroup, Button } from "vant";

Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Button);
export default {
  components: { PHeader },
};
</script>
<style scoped>
.btn-exit {
  width: 3.74rem;
  margin: 0.3rem 0.2rem;
}
.color-blue{
    color: #1677FF;
}
</style>