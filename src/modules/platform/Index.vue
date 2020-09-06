<template>
  <div class="index">
    <van-tabs v-model="active" sticky>
       <van-tab title="申报历史">
          <platform-list :list="list1"> </platform-list>
       </van-tab>
       <van-tab title="许可档案">
          <platform-list :list="list2"> </platform-list>
       </van-tab>
    </van-tabs>

  </div>
</template>

<script>
import platformList from './common/platformList'
export default {
  name: 'index',
  components: {
    platformList
  },
  data(){
    return {
      active:0,
      list1: [1,2,3],
      list2: [1,2,3,4]
    }
  }
}
</script>
