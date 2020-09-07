<template>
  <div>
    <PHeader>等待办理企业信息</PHeader>
    <van-search
      v-model="keyword"
      placeholder="请输入搜索关键词"
    />
    <!-- 这里给筛选留个地方 -->
    <platform-list :list="list1">
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
              :type="slotProps.state1Type"
              class="mr10"
            >{{slotProps.state1}}</van-tag>
            <van-tag
              plain
              round
              :type="slotProps.state2Type"
            >{{slotProps.state2}}</van-tag>
          </van-col>
        </van-row>
        <van-cell
          title="产品类别"
          value="危险化学品"
        />
        <van-cell
          title="审批事项"
          value="工业产品生产许可"
        />
      </template>
      <template #variable>
        <van-cell
          title="所在地区"
          value="菏泽市成武县"
        />
        <van-cell
          title="营业执照注册号"
          value="0254215421357561354"
        />
        <van-cell
          title="组织机构代码"
          value="05165415X"
        />
      </template>
    </platform-list>

    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="friends-o">个人中心</van-tabbar-item>
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
      finished: true,
      loading: false,
      list1: [
        {
          orgname: "山东群英电气有限公司1",
          index: 1,
          state1: "超期50天",
          state1Type: "danger",
          state2: "发证",
          state2Type: "success",
        },
        {
          orgname: "山东群英电气有限公司2",
          index: 2,
          state1: "上报4天",
          state1Type: "success",
          state2: "变更",
          state2Type: "danger",
        },
        {
          orgname: "山东群英电气有限公司3",
          index: 3,
          state1: "超期2天",
          state1Type: "danger",
          state2: "换证",
          state2Type: "primary",
        },
      ],
    };
  },
  components: { PHeader, platformList },
  methods: {
    goVerificationInfo(ind) {
      console.info("当前点击的索引是：" + ind);
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