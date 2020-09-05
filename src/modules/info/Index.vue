<template>
  <div class="index">
    <PHeader :showArrow="true" @leftClick="onClickLeft" @rightClick="onClickRight">
      <template #left>
          返回
      </template>
      <template #default>
          首页
      </template>
     <template #right>
          搜索
      </template>
    </PHeader>
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
    }
  }
}
</script>
