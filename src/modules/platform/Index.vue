<template>
  <div class="index">
    <van-tabs v-model="currentTab">
       <van-tab title="申报历史">内容 1</van-tab>
       <van-tab title="许可档案">内容 2</van-tab>
    </van-tabs>
  </div>
</template>

<script>

export default {
  name: 'index',
  components: {
  },
  data(){
    return {
      currentTab:"1"
    }
  }
}
</script>
