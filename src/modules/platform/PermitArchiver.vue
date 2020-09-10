<template>
  <div class="index">
    <van-tabs v-model="active" :ellipsis="false"
            :border="false" swipe-threshold="4">
      <van-tab title="受理通知书">
          <div v-for="(item, index) in list1" :key="index" class="imageStyle">
              <van-image width="2rem" height="2rem" fit="contain" src="https://img.yzcdn.cn/vant/cat.jpeg" rel="external nofollow" />
              <p>现场审查计量器</p>
          </div>
      </van-tab>
      <van-tab title="许可证书">
          <div v-for="(item, index) in list1" :key="index" class="imageStyle">
              <van-image width="2rem" height="2rem" fit="contain" src="https://img.yzcdn.cn/vant/cat.jpeg" rel="external nofollow" />
              <p>全国工业产品生产许可证</p>
          </div>
      </van-tab>
      <van-tab title="不予许可决定书">
        <div v-for="(item, index) in list1" :key="index" class="imageStyle">
              <van-image width="2rem" height="2rem" fit="contain" src="https://img.yzcdn.cn/vant/cat.jpeg" rel="external nofollow" />
              <p>不予许可决定书</p>
          </div>
      </van-tab>
      <van-tab title="证照寄送凭证">
        <div v-for="(item, index) in list1" :key="index" class="imageStyle">
              <van-image width="2rem" height="2rem" fit="contain" src="https://img.yzcdn.cn/vant/cat.jpeg" rel="external nofollow" />
              <p>证照寄送凭证</p>
          </div>
      </van-tab>
    </van-tabs>
    <van-notice-bar class="notice" color="#1989fa" background="#ecf9ff" left-icon="info-o" >纸质证书请到受理申请窗口去领取或告知邮寄信息</van-notice-bar>
    <van-tabbar v-model="activeTabbar">
      <van-tabbar-item icon="wap-home-o" to="/platform">首页</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/user-center">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import platformList from "../platform/common/platformList";
export default {
  name: "index",
  components: {
    platformList
  },
  data() {
    return {
      active: 0,
      activeTabbar: 0,
      finished: true,
      loading: false,
      list1: [
        { 
          orgname: "山东群英电气有限公司1",
          index: 1
        },
        { 
          orgname: "山东群英电气有限公司2",
          index: 2
        },
        { 
          orgname: "山东群英电气有限公司3",
          index: 3
        },
        { 
          orgname: "山东群英电气有限公司4",
          index: 4
        }
      ]
    };
  },
  methods:{
    onLoad(){},
    goQualificationsList(){
      this.$router.push("/qualifications")
    },
    goVerificationInfo(index){
      if(index === 1){
        this.$router.push("/certification-check");
      }
      else if(index === 2){
        this.$router.push("/change-check");
      }
      else{
        this.$router.push("/replace-check");
      }
    }
  }
};
</script>

<style lang="less" scoped>
.van-radio,
.van-button,
.van-notice-bar{
  padding: 10px 16px;
}

.notice{
  position: fixed;
  bottom: 50px;
  left:0%;
  line-height: 30px;
  width: 100%;
}

.imageStyle{
  text-align: center;
}

.van-radio{
  padding: 10px 16px;
  overflow: hidden;
  font-size: 14px;
  line-height: 24px;
}

.org-info {
  padding: 0.1rem 0.15rem;
  color: #7b7b7b;
  .org-name {
    font-size: 0.16rem;
  }
  .org-tags {
    text-align: right;
  }
}
</style>