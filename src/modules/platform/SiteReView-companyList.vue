<template>
  <div>
    <PHeader :showArrow="true">现场审查</PHeader>
    <!-- 这里给筛选留个地方 -->
    <van-popup v-model="isShowPopup" position="right" :style="{ width: '75%', height:'100%' }">
      <filterSearchForSiteReview @onSearchHandler="searchHandler"></filterSearchForSiteReview>
    </van-popup>

    <van-tabs v-model="activeName" @click="onClick">
      <van-tab title="待办事项" name="wait">
        <template>
          <van-cell :title="processTotal" value value-class="filterLabel">
            <template #default>
              <div @click="isShowPopup = true">
                筛选
                <i class="icon-filter"></i>
              </div>
            </template>
          </van-cell>

          <platform-list :list="findPlanList" :showArrow="false" @reLoad="reloadData($event)">
            <template #fixed="{slotProps}">
              <van-row class="org-info">
                <van-col
                  span="12"
                  class="org-name"
                  @click="goVerificationInfo(slotProps.index)"
                >{{slotProps.orgname}}</van-col>
                <van-col span="12" class="org-tags">
                  <van-tag
                    plain
                    round
                    class="ml10"
                    size="large"
                    :type="slotProps.state2Type"
                  >{{slotProps.applydescription}}</van-tag>
                </van-col>
              </van-row>
              <van-cell title="产品类别" :value="slotProps.producttype" />
              <van-cell title="所在地区" :value="slotProps.region" />
              <van-cell title="联系人" :value="slotProps.linkman" />
              <van-cell title="联系电话" :value="slotProps.tel" />
              <van-cell title="评审时间" :value="slotProps.date" />
            </template>
          </platform-list>
        </template>
      </van-tab>
      <van-tab title="已办事项" name="finish">
        <template>
          <van-cell :title="processTotal" value value-class="filterLabel">
            <template #default>
              <div @click="isShowPopup = true">
                筛选
                <i class="icon-filter"></i>
              </div>
            </template>
          </van-cell>

          <platform-list :list="findPlanList" :showArrow="false" @reLoad="reloadData($event)">
            <template #fixed="{slotProps}">
              <van-row class="org-info">
                <van-col
                  span="12"
                  class="org-name"
                  @click="goVerificationInfo(slotProps.index)"
                >{{slotProps.orgname}}</van-col>
                <van-col span="12" class="org-tags">
                  <van-tag
                    plain
                    round
                    class="ml10"
                    size="large"
                    :type="slotProps.state2Type"
                  >{{slotProps.applydescription}}</van-tag>
                </van-col>
              </van-row>
              <van-cell title="产品类别" :value="slotProps.producttype" />
              <van-cell title="所在地区" :value="slotProps.region" />
              <van-cell title="联系人" :value="slotProps.linkman" />
              <van-cell title="联系电话" :value="slotProps.tel" />
              <van-cell title="评审时间" :value="slotProps.date" />
            </template>
          </platform-list>
        </template>
      </van-tab>
    </van-tabs>

    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="/site-reView">首页</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/siteReView-userCenter">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import Vue from "vue";
import PHeader from "../../components/PHeader.vue";
import filterSearchForSiteReview from "./common/filterSearchForSiteReview";
import platformList from "../common/platformList";
import { Search, Tabbar, TabbarItem } from "vant";

Vue.use(Search);
Vue.use(Tabbar);
Vue.use(TabbarItem);
export default {
  data() {
    return {
      activeName: "wait",
      keyword: "",
      active: 0,
      findPlanList: [],
      isShowPopup: false,
      processTotal: "共2条",
    };
  },
  created() {
    this.getfindList({ type: "wait" });
  },
  components: { PHeader, platformList, filterSearchForSiteReview },
  methods: {
    goVerificationInfo(ind) {
      console.info("当前点击的索引是：" + ind);
      client.saveSessionStorage("findPlanInfo", this.findPlanList[ind]);
      this.$router.push("/siteReView-companyInfo");
    },
    reloadData(pageNum){
      this.getfindList({ type: this.activeName,pageNum: pageNum})
    },
    getfindList(reqData) {
      client.rpc("/sc/findPlanList", reqData).then((res) => {
        this.findPlanList = res.list || [];

        for (let i = 0; i < this.findPlanList.length; i++) {
          const itemData = this.findPlanList[i];
          itemData.index = i;
          itemData.date = itemData.sdate + "至" + itemData.edate;
          switch (itemData.applydescription) {
            case "发证":
              itemData.state2Type = "success";
              break;
            case "变更":
              itemData.state2Type = "danger";
              break;
            case "换证":
              itemData.state2Type = "primary";
              break;
          }
        }
      });
    },
    onClick(name, title) {
      console.info(
        name + "||" + title + "；当前activeName是" + this.activeName
      );
      this.getfindList({ type: name });
    },
    searchHandler(formData) {
      const itemData = Object.assign(formData, { type: this.activeName });
      this.getfindList(itemData);
      console.info("当前查询条件：", JSON.stringify(itemData));
      this.isShowPopup = false;
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
</style>