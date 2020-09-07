<template>
  <div class="list">
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-cell-group v-for="(item,index) in list" :key="index" class="mt10">
          <slot :slotProps='item'></slot>
      </van-cell-group>
    </van-list>
  </div>
</template>

<script>
export default {
  name: "infoList",
  props: {
    list: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      loading: false,
      finished: false,
    }
  },
  methods:{
      onLoad(){}
  }
};
</script>

<style lang="less" scoped>
.org-info{
    padding: 0.1rem 0.15rem;
    color: #7b7b7b;
    .org-name{
        font-size:0.16rem;
    }
    .org-tags{
        text-align: right;
    }
}
</style>