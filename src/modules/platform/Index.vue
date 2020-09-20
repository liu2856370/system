<template>
  <div class="index">
    <PHeader :showArrow="false">
      <template #default>企业申报</template>
    </PHeader>
    <van-tabs v-model="active" sticky>
      <van-tab title="申报历史">
        <van-cell :title="processTotal">
          <div @click="isShowPopup = true">筛选</div>
        </van-cell>
        <platform-list :list="processList">
          <template #fixed="{slotProps}">
            <van-row class="org-info">
              <van-col span="12" class="org-name">{{slotProps.orgname}}</van-col>
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
            <van-cell title="主动撤回日期" :value="slotProps.submitdate" />
            <van-cell v-show="slotProps.button" @click="seeNotice(slotProps.id)" title="现场审查计划通知书">
              <template #right-icon>
                <van-tag plain round type="primary">{{slotProps.button}}</van-tag>
              </template>
            </van-cell>
          </template>
        </platform-list>
      </van-tab>
      <van-tab title="许可档案">
        <van-cell :title="processTotal" value />
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
        </platform-list>
      </van-tab>
    </van-tabs>
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
      aa: "01",
      processList: [],
      isShowPopup: false,
      list2: [
        { orgname: "山东群英电气有限公司1" },
        { orgname: "山东群英电气有限公司2" },
        { orgname: "山东群英电气有限公司3" },
        { orgname: "山东群英电气有限公司4" },
        { orgname: "山东群英电气有限公司5" },
      ],
    };
  },
  methods: {
    onLoad() {},
    goPermitArchiver(id) {
      client.saveSessionStorage("filesID", id);
      this.$router.push("/permit-archiver");
    },
    //查看计划通知书
    seeNotice(event) {
      client.saveSessionStorage("notificationID", event);
      this.$router.push("/admin-NotiCexaminationView");
    },
    searchHandler(formData) {
      //formData筛选的数据
      //申报历史
      client.rpc("/qy/findSbLsList").then((res) => {
        this.processTotal = "共" + res.list.length + "条";
        this.processList = res.list;
      });
    },
  },
  created() {
    //申报历史
    client.rpc("/qy/findSbLsList").then((res) => {
      this.processTotal = "共" + res.list.length + "条";
      this.processList = res.list;
    });
    //许可档案
    client.rpc("/qy/findXkdaList").then((res) => {
      this.processTotal = "共" + res.list.length + "条";
      this.list2 = res.list;
    });
  },
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