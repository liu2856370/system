<template>
  <div>
    <PHeader :showArrow="true">现场核查通知书</PHeader>
    <van-image
      width="100%"
      height="100%"
      src="https://img.yzcdn.cn/vant/cat.jpeg"
    />
  </div>
</template>
<script>
import Vue from "vue";
import PHeader from "../../components/PHeader.vue";
import platformList from "../platform/common/platformList";
import { Image as VanImage } from "vant";

Vue.use(VanImage);
export default {
  components: { PHeader, platformList },
};
</script>