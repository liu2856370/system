<template>
  <div class="index">
    <PHeader :showArrow="false">
      <template #default>企业申报</template>
    </PHeader>
        <van-cell :title="processTotal">
          <div @click="isShowPopup = true">筛选</div>
        </van-cell>
        <platform-list :list="processList">
          <template #fixed="{slotProps}">
            <van-row class="org-info">
              <van-col span="12" class="org-name" @click="goDetails(slotProps.id)">{{slotProps.orgname}}</van-col>
              <van-col span="12" class="org-tags">
                <van-tag plain round type="primary" size="large" class="mr10">{{slotProps.spzt}}</van-tag>
                <van-tag plain round size="large" type="primary">{{slotProps.applydescription}}</van-tag>
              </van-col>
            </van-row>
            <van-cell title="许可事项" :value="slotProps.itemname" />
            <van-cell title="产品类别" :value="slotProps.producttypename" />
          </template>
          <template #variable="{slotProps}">
            <van-cell title="产品名称" :value="slotProps.producttype" />
            <van-cell title="提交单位" :value="slotProps.description" />
            <van-cell title="提交日期" :value="slotProps.submitdate" />
            <van-cell title="许可档案" >
              <template #right-icon>
                <van-tag plain round @click="goPermitArchiver(slotProps.id)" size="large" type="primary">查看</van-tag>
              </template>
            </van-cell>
            <van-cell title="操作区">
              <template #right-icon>
                <van-tag plain round @click="choceButtonType(slotProps.orgname,slotProps.id,slotProps.button)" type="primary">{{slotProps.button}}</van-tag>
              </template>
            </van-cell>
          </template>
        </platform-list>
        <!-- <van-cell :title="processTotal" value="" />
        <platform-list :list="list2">
          <template #fixed="{slotProps}">
            <van-row class="org-info">
              <van-col
                span="12"
                class="org-name"
                @click="goPermitArchiver(slotProps.id)"
              >{{slotProps.orgname}}</van-col>
              <van-col span="12" class="org-tags">
                <van-tag plain round size="large" type="primary">{{slotProps.applydescription}}</van-tag>
              </van-col>
            </van-row>
            <van-cell title="许可事项" :value="slotProps.itemName" />
            <van-cell title="产品类别" :value="slotProps.prodtype" />
          </template>
          <template #variable="{slotProps}">
            <van-cell title="产品名称" :value="slotProps.prodname" />
          </template>
        </platform-list> -->
    <van-popup v-model="isShowPopup" position="right" :style="{ width: '75%', height:'100%' }">
      <filterSearch @onSearchHandler="searchHandler"></filterSearch>
    </van-popup>
    <van-tabbar v-model="activeTabbar">
      <van-tabbar-item icon="wap-home-o" to="/platform">首页</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/user-center">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import platformList from "../common/platformList";
import filterSearch from "./common/filterSearch";
import PHeader from "../../components/PHeader.vue";
export default {
  name: "index",
  components: {
    PHeader,
    platformList,
    filterSearch,
  },
  data() {
    return {
      processTotal: "",
      active: 0,
      activeTabbar: 0,
      processList: [],
      isShowPopup:false
    };
  },
  created(){
    //申报历史
    client.rpc("/qy/findSbLsList").then(res=>{
        this.processTotal = "共" + res.list.length + "条";
        this.processList = res.list;
    });
  },
  methods:{
    onLoad(){},
    //查看许可档案
    goPermitArchiver(id){
      client.saveSessionStorage("filesID",id);
      this.$router.push("/permit-archiver");
    },
    //计划通知书、补正内容、退回原因
    choceButtonType(orgname,id,buttonName){
      client.saveSessionStorage("notificationID", id);
      client.saveSessionStorage("notificationOrgname", orgname);
      if(buttonName == "计划通知书"){
        this.$router.push("/admin-NotiCexaminationView");
      }else if(buttonName == "查看原因"){
        this.$router.push("/admin-ReturnReasonView");
      }else if(buttonName == "查看补正内容"){
        this.$router.push("/admin-SupplementView");
      }
    },
    //查看详情
    goDetails(id){
      client.saveSessionStorage("detailsID", id);
      this.$router.push("/admin-DeclareDetailsView");
    },
    searchHandler(formData) {
      //formData筛选的数据
      //申报历史
      this.isShowPopup = false;
      client.rpc("/qy/findSbLsList",formData).then((res) => {
        this.processTotal = "共" + res.list.length + "条";
        this.processList = res.list;
      });
    }
  }
};
</script>
<style lang="less" scoped>
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