<template>
  <div>
    <PHeader :showArrow="true">现场审查</PHeader>
    <van-search
      v-model="keyword"
      placeholder="请输入搜索关键词"
    />

    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
      class="mt10"
    >
      <van-cell
        v-for="item in list"
        :key="item"
        :title="item"
        is-link
        @click="goCompanyList"
      />
    </van-list>

    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="friends-o">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import Vue from "vue";
import PHeader from "../../components/PHeader.vue";
import { Search, List, Cell, CellGroup, Tabbar, TabbarItem } from "vant";

Vue.use(Search);
Vue.use(List);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Tabbar);
Vue.use(TabbarItem);

export default {
  data() {
    return {
      keyword: "",
      list: ["工业计划", "食品相关计划", "工业计划", "食品相关计划"],
      loading: false,
      finished: false,
      active: 0,
    };
  },
  components: { PHeader },
  methods: {
    onLoad() {},
    goCompanyList(){
        this.$router.push("/siteReView-companyList");
    }
  },
};
</script>