<template>
  <div>
    <PHeader :showArrow="true">等待办理企业信息</PHeader>
    <van-search
      v-model="keyword"
      placeholder="请输入搜索关键词"
    />
    <!-- 这里给筛选留个地方 -->
    <platform-list :list="findPlanList">
      <template #fixed="{slotProps}">
        <van-row class="org-info">
          <van-col
            span="12"
            class="org-name"
            @click="goVerificationInfo(slotProps.index)"
          >{{slotProps.orgname}}</van-col>
          <van-col
            span="12"
            class="org-tags"
          >
            <van-tag
              plain
              round
              size="large"
              :type="slotProps.state1Type"
              class="mr10"
            >{{slotProps.showDays}}</van-tag>
            <van-tag
              plain
              round
              size="large"
              :type="slotProps.state2Type"
            >{{slotProps.applydescription}}</van-tag>
          </van-col>
        </van-row>
        <van-cell
          title="产品类别"
          :value="slotProps.producttype"
        />
        <van-cell
          title="所在地区"
          :value="slotProps.region"
        />
        <!-- </template>
      <template #variable="{slotProps}"> -->

        <van-cell
          title="联系人"
          :value="slotProps.linkman"
        />
        <van-cell
          title="联系电话"
          :value="slotProps.tel"
        />
        <van-cell
          title="评审时间"
          :value="slotProps.date"
        />
      </template>
    </platform-list>

    <van-tabbar v-model="active">
      <van-tabbar-item
        icon="home-o"
        to="/site-reView"
      >首页</van-tabbar-item>
      <van-tabbar-item
        icon="user-o"
        to="/siteReView-userCenter"
      >个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import Vue from "vue";
import PHeader from "../../components/PHeader.vue";
import platformList from "../platform/common/platformList";
import { Search, Tabbar, TabbarItem } from "vant";

Vue.use(Search);
Vue.use(Tabbar);
Vue.use(TabbarItem);
export default {
  data() {
    return {
      keyword: "",
      active: 0,
      findPlanList: [],
    };
  },
  created() {
    this.findPlanList = client.loadSessionStorage("findPlanList");
    for (let i = 0; i < this.findPlanList.length; i++) {
      const itemData = this.findPlanList[i];
      itemData.index = i;
      itemData.date = itemData.sdate + "至" + itemData.edate;
      if (itemData.lastdate < 0) {
        itemData.showDays = "超期：" + itemData.lastdate;
        itemData.state1Type = "danger";
      } else {
        itemData.showDays = "上报：" + itemData.lastdate;
        itemData.state1Type = "success";
      }
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
  },
  components: { PHeader, platformList },
  methods: {
    goVerificationInfo(ind) {
      console.info("当前点击的索引是：" + ind);
      client.saveSessionStorage("findPlanInfo", this.findPlanList[ind]);
      this.$router.push("/siteReView-companyInfo");
    },
  },
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