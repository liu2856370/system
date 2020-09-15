<template>
  <div>
    <van-cell
      :title="processTotal"
      value=""
      value-class="filterLabel"
    >
    <template #default>筛选<i class="icon-filter"></i></template>
    </van-cell>

    <ul class="licenseCard">
      <li class="upComing">
        <p>许可代办</p>
        <label>99</label>
      </li>
      <li class="done">
        <p>许可已办</p>
        <label>210</label>
      </li>
    </ul>
  </div>
</template>
<script>
import Vue from "vue";
import { Cell, CellGroup } from "vant";

Vue.use(Cell);
Vue.use(CellGroup);
export default {
  data() {
    return {
      processTotal: "共21条",
    };
  },
};
</script>
