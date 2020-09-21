<template>
  <div class="list">
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-cell-group v-for="(item, index) in list" :key="index" class="mt10">
        <div class="fixed-outer">
          <slot name="fixed" :slotProps="item"></slot>
        </div>
        <div class="variable-outer" v-show="item.unfold">
          <slot name="variable" :slotProps="item"></slot>
        </div>
        <div class="arrow-outer" @click="toggleShow(index)" v-show="showArrow">
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
      default: []
    },
    showArrow:{
      type:Boolean,
      default:true
    }
  },
  data() {
    return {
      //默认数组长度为0
      listLength: 0,
      loading: false,
      finished: true
    }
  },
  methods: {
    onLoad() {
    },
    toggleShow(index) {
        this.$set(this.list[index],"unfold",!this.list[index].unfold);
    }
  },
};
</script>

<style lang="less" scoped>
.fixed-outer::after,.variable-outer::after{
     content: "";
     border-top: 1px solid #f3f3f3;
     height: 0;
     margin: 0rem 0.16rem;
     display: block;
}
.arrow-outer{
    text-align: center;
    font-size:0.22rem;
    height: 0.3rem;
    line-height:0.32rem;
    margin: 0.1rem 0.16rem;
}
</style>