<template>
  <div class="index">
    <PHeader :showArrow="true" @leftClick="onClickLeft" @rightClick="onClickRight">首页</PHeader>
    <button @click="goIndex">下一步</button>
  </div>
</template>

<script>
// @ is an alias to /src
import PHeader from '@/components/PHeader.vue'
import { Toast } from 'vant'

export default {
  name: 'index',
  components: {
    PHeader
  },
  methods:{
    onClickLeft() {
        Toast('点击了返回');
        this.$router.go(-1);
    },
    onClickRight() {
        Toast('点击了搜索');
    },
    goIndex(){
      this.$router.go("/info/confirm");
    }
  }
}
</script>
