<template>
  <div class="index">
    <PHeader :showArrow="true"  @leftClick="onClickLeft">
        <template #default>
            许可档案
        </template>
    </PHeader>
    <van-tabs v-model="active" :ellipsis="false"
            :border="false" @click="tabHandler" swipe-threshold="4">
      <van-tab title="受理通知书">
          <div v-for="(item, index) in pictureList" :key="index" class="imageStyle">
              <van-image width="2rem" height="2rem" fit="contain" src="https://img.yzcdn.cn/vant/cat.jpeg" rel="external nofollow" />
              <p>{{item.filename}}</p>
          </div>
          <div class="imageStyle">
            <van-image  width="2rem" height="2rem" fit="contain" use-error-slot v-show="pictureList">
            </van-image>
            <p>暂无数据</p>
          </div>
      </van-tab>
      <van-tab title="许可证书">
          <div v-for="(item, index) in pictureList" :key="index" class="imageStyle">
              <van-image width="2rem" height="2rem" fit="contain" src="https://img.yzcdn.cn/vant/cat.jpeg" rel="external nofollow" />
              <p>{{item.filename}}</p>
          </div>
          <div class="imageStyle">
            <van-image  width="2rem" height="2rem" fit="contain" use-error-slot v-show="pictureList">
            </van-image>
            <p>暂无数据</p>
          </div>
      </van-tab>
      <van-tab title="不予许可决定书">
          <div v-for="(item, index) in pictureList" :key="index" class="imageStyle">
              <van-image width="2rem" height="2rem" fit="contain" src="https://img.yzcdn.cn/vant/cat.jpeg" rel="external nofollow" />
              <p>{{item.filename}}</p>
          </div>
          <div class="imageStyle">
            <van-image  width="2rem" height="2rem" fit="contain" use-error-slot v-show="pictureList">
            </van-image>
            <p>暂无数据</p>
          </div>
      </van-tab>
      <van-tab title="证照寄送凭证">
          <div v-for="(item, index) in pictureList" :key="index" class="imageStyle">
              <van-image width="2rem" height="2rem" fit="contain" src="https://img.yzcdn.cn/vant/cat.jpeg" rel="external nofollow" />
              <p>{{item.filename}}</p>
          </div>
          <div class="imageStyle">
            <van-image  width="2rem" height="2rem" fit="contain" use-error-slot v-show="pictureList">
            </van-image>
            <p>暂无数据</p>
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
import PHeader from '@/components/PHeader.vue';
export default {
  name: "index",
  components: {
    platformList,
    PHeader
  },
  data() {
    return {
      active: 0,
      activeTabbar: 0,
      finished: true,
      loading: false,
      pictureList: []
    };
  },
  created: function () {
    this.filesID = client.loadSessionStorage("filesID");
    this.tabHandler();
  },
  methods:{
    onLoad(){},
    //返回键
    onClickLeft(){},
    //
    tabHandler(index){
      this.filesID = client.loadSessionStorage("filesID");
      var type;
      if(index == undefined || index == 0){
        type = "3";
      }else if(index == 1){
        type = "4";
      }else if(index == 2){
        type = "5";
      }else if(index == 3){
        type = "8";
      }
      client.rpc("/qy/getDaFileList/",{
        id:this.filesID,
        type:type
      }).then(res=>{
        this.pictureList = res;
      });
    },
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