<template>
  <div>
    <van-overlay :show="show">
      <div class="wrapper" @click.stop>
        <van-loading type="spinner" />//这里是加载中图标
      </div>
    </van-overlay>
  </div>
</template>

<script>
export default {
    props:["isShow"],//通过父组件传过来的show1进行遮罩显示与隐藏 show1为布尔值
    data(){
        return{
            show:this.isShow
        }
    },
    methods:{

    }
};
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>