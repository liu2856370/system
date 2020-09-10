<template>
  <div style="margin-bottom:.6rem;">
    <PHeader :showArrow="true">生产地址</PHeader>
    <van-cell-group class="mt10">
      <van-cell
        title="生产地址"
        value="山东省泰安市岱岳区满庄镇大汶口工业园"
      />
      <van-cell
        title="产品品种"
        value="工业用氢氧化钙"
      />
      <van-cell
        title="规格型号"
        value="HIW00912188"
      />
    </van-cell-group>
    <van-cell-group class="mt10">
      <van-cell
        title="生产地址"
        value="山东省泰安市岱岳区满庄镇大汶口工业园"
      />
      <van-cell
        title="产品品种"
        value="工业用氢氧化钙"
      />
      <van-cell
        title="规格型号"
        value="HIW00912188"
      />
    </van-cell-group>
    <van-cell-group class="mt10">
      <van-cell
        title="生产地址"
        value="山东省泰安市岱岳区满庄镇大汶口工业园"
      />
      <van-cell
        title="产品品种"
        value="工业用氢氧化钙"
      />
      <van-cell
        title="规格型号"
        value="HIW00912188"
      />
    </van-cell-group>
    <van-cell-group class="mt10">
      <van-cell
        title="生产地址"
        value="山东省泰安市岱岳区满庄镇大汶口工业园"
      />
      <van-cell
        title="产品品种"
        value="工业用氢氧化钙"
      />
      <van-cell
        title="规格型号"
        value="HIW00912188"
      />
    </van-cell-group>

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
import { Tabbar, TabbarItem } from "vant";

Vue.use(Tabbar);
Vue.use(TabbarItem);

export default {
  data() {
    return {
      active: 0,
    };
  },
  components: { PHeader, platformList },
};
</script>
<style scoped>
.mt10 {
  margin-top: 0.1rem;
}
</style>