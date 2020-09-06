<template>
  <div class="p-header">
    <van-nav-bar 
    :left-text="leftText"
    :right-text="rightText" 
    :left-arrow="showArrow" 
    @click-left="onClickLeft" 
    @click-right="onClickRight">
      <template #left>
          <!-- 该插槽用于特殊的插入 -->
          <slot name="left"> </slot>
      </template>
      <template #title>
          <!-- 该插槽用于特殊的插入 -->
          <slot> </slot>
      </template>
      <template #right>
          <!-- 该插槽用于特殊的插入 -->
          <slot name="right"> </slot>
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  name: "PHeader",
  props: {
      leftText:{
          type: String,
          default: ''
      },
      rightText:{
          type: String,
          default: ''
      },
      showArrow:{
          type:Boolean,
          default:false
      }
  },
  methods: {
      onClickLeft(){
          this.showArrow ? this.$router.go(-1):"";
          this.$emit("leftClick");
      },
      onClickRight(){
          this.$emit("rightClick");
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
