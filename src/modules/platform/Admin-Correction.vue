<template>
  <div>
    <PHeader :showArrow="true" @leftClick="onClickLeft">
      <template #default>材料补正</template>
    </PHeader>
    <platform-list :list="list1" :show="false">
      <template #fixed>
        <!-- <div style="margin-top: 0.1rem;"> -->
        <van-cell title="上报时间" value="2020-05-26" />
        <van-cell title="文书">
          <template #right-icon>
            <van-tag plain round type="primary" @click="correctionNotice">补正通知单</van-tag>
          </template>
        </van-cell>
        <van-cell title="补正次数" value="第一次" />
        <!-- </div> -->
      </template>

    </platform-list>
  </div>
</template>
<script>
import PHeader from "../../components/PHeader.vue";
import platformList from "../platform/common/platformList";
export default {
  name: "adminCorrection",
  data() {
    return {
      list1: [
        {
          ori: "1",
        },
        {
          ori: "1",
        },
      ],
    };
  },
  components: {
    PHeader,
    platformList,
  },
  methods: {
    onClickLeft() {},
    correctionNotice() {},


    //请求接口
  },
};
</script>