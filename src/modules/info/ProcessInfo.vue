<template>
  <div class="index">
    <PHeader :showArrow="true">过程信息</PHeader>
    <van-cell :title="processTotal">
      <div @click="isShowPopup = true">筛选</div>
    </van-cell>
    <platform-list :list="processList" @reLoad="reloadData($event)">
      <template #fixed="{slotProps}">
        <van-row class="org-info">
          <van-col
            span="14"
            class="org-name"
            @click="goVerificationInfo(slotProps)"
          >{{slotProps.orgname}}</van-col>
          <van-col span="10" class="org-tags">
            <!-- <van-tag plain round type="primary" size="large" class="mr10">{{slotProps.flag|dictFormatter("businessType")}}</van-tag> -->
            <i :class="slotProps.stateClass"></i>
            <van-tag plain round type="primary" size="large">{{slotProps.applydescription}}</van-tag>
          </van-col>
        </van-row>
        <van-cell title="产品类别" :value="slotProps.prodtype" />
        <van-cell title="审批事项" :value="slotProps.itemName" />
      </template>
      <template #variable="{slotProps}">
        <van-cell title="所在地区" :value="slotProps.region" />
        <van-cell title="营业执照注册号" :value="slotProps.busliceno" />
        <van-cell title="组织机构代码" :value="slotProps.organno" />
      </template>
    </platform-list>
    <van-popup v-model="isShowPopup" position="right" :style="{ width: '75%', height:'100%' }">
      <filterSearch @onSearchHandler="searchHandler"></filterSearch>
    </van-popup>
  </div>
</template>

<script>
import PHeader from "../../components/PHeader.vue";
import platformList from "../common/platformList";
import filterSearch from "./common/filterSearch";
export default {
  name: "index",
  components: {
    platformList,
    PHeader,
    filterSearch,
  },
  data() {
    return {
      radio: 0,
      processTotal: "",
      certificateTotal: "",
      active: 0,
      value: "",
      itemData: "",
      processList: [],
      certificateList: {},
      certificateCompanyList: [],
      isShowPopup: false,
    };
  },
  methods: {
    goVerificationInfo(itemData) {
      client.saveStorage("companyProcessInfo", itemData);
      if (itemData.applydescription === "发证") {
        this.$router.push("/certification-check");
      } else if (itemData.applydescription === "变更") {
        this.$router.push("/change-check");
      } else if (itemData.applydescription === "换证") {
        this.$router.push("/replace-check");
      }

      // //受理中计划中
      // if(20000<=itemData.state&&itemData.state<50000){
      //   this.$router.push("/replace-check");
      // }
      // //审查中、许可中、已发证、不予许可
      // else if((50000<=itemData.state&&itemData.state<=80000) || (parseInt(itemData.state) === 10700)){
      //   this.$router.push("/certification-check");
      // }
    },
    searchHandler(formData) {
      //formData筛选的数据
      //申报历史
      this.isShowPopup = false;
      client
        .rpc("/xxgs/findGcxx", {
          itemId: client.loadStorage("approvalInfo").code,
          pageNum:1
        })
        .then((res) => {
          this.processTotal = "共" + res.list.length + "条";
          this.processList = res.list;
          for (let i = 0; i < res.list.length; i++) {
            let itemData = res.list[i];
            itemData.stateClass = "stateIcon icon-stateIcon" + res.list[i].flag;
          }
        });
    },
    reloadData(pageNum){
      this.rpcListData(pageNum);
    },
    rpcListData(pageNum){
       client
        .rpc("/xxgs/findGcxx", {
          itemId: client.loadStorage("approvalInfo").code,
          pageNum:pageNum
        })
        .then((res) => {
          this.processTotal = "共" + res.list.length + "条";
          this.processList = res.list;
          for (let i = 0; i < res.list.length; i++) {
            let itemData = res.list[i];
            itemData.stateClass = "stateIcon icon-stateIcon" + res.list[i].flag;
          }
        });
    }
  }
};
</script>

<style lang="less" scoped>
.van-radio,
.van-button,
.van-notice-bar {
  padding: 10px 16px;
}

.van-radio {
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
    color: #1989fa;
  }
  .org-tags {
    text-align: right;
  }
}
</style>