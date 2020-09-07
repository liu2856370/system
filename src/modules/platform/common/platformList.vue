<template>
  <div class="list">
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-cell-group v-for="(item, index) in list" :key="index" class="mt10">
        <div>
          <slot name="fixed" :slotProps="item"></slot>
        </div>
        <div v-show="item.unfold">
          <slot name="variable" :slotProps="item"></slot>
        </div>
        <div class="arrow-outer" @click="toggleShow(index)">
            <van-icon v-show="item.unfold" name="arrow-up" />
            <van-icon v-show="!item.unfold"  name="arrow-down" />
        </div>
      </van-cell-group>
    </van-list>
  </div>
</template>

<script>
export default {
  name: "platformList",
  props: {
    list: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      loading: false,
      finished: false
    };
  },
  methods: {
    onLoad() {},
    toggleShow(index) {
        console.log(this.list[index].unfold)
        this.$set(this.list[index],"unfold",!this.list[index].unfold);
    },
  },
};
</script>

<style lang="less" scoped>
.arrow-outer{
    text-align: center;
    font-size:0.22rem;
    height: 0.3rem;
    line-height:0.3rem;
    border-top: 1px solid #ebedf0;
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