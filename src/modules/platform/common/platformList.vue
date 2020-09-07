<template>
  <div class="list">
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-cell-group v-for="(item, index) in list" :key="index" class="mt10">
          <slot name="fixed" :slotProps="item"></slot>
          <slot v-if="unfold" name="variable" :slotProps="item"></slot>
          <div :class="unfold?'unfold':'noUnfold'" @click="toggleShow">{{arrowTit}}</div>
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
      finished: false,
      unfold:false,
      arrowTit:"展开"
    }
  },
  methods:{
      onLoad(){},
      toggleShow(){
          this.unfold = !this.unfold;
          if(this.unfold){
              this.arrowTit = "收起";
          }else{
               this.arrowTit = "展开";
          }
      }
  }
};
</script>

<style lang="less" scoped>
.hide{
    display: none;
}
.show{
    display: block;
}
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