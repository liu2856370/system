<template>
  <div>
    <van-cell
      :title="processTotal"
      value=""
      value-class="filterLabel"
    >
      <template #default>
        <div @click="showPopup">筛选<i class="icon-filter"></i></div>
      </template>
    </van-cell>

    <van-popup
      v-model="show"
      get-container="body"
      position="right"
      closeable
      :style="{ width: '80%',height:'100%'}"
    >内容</van-popup>

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
import { Cell, Popup } from "vant";

Vue.use(Cell);
Vue.use(Popup);
export default {
  data() {
    return {
      processTotal: "共21条",
      show: false,
    };
  },
  methods: {
    showPopup() {
      this.show = true;
    },
  },
};
</script>
