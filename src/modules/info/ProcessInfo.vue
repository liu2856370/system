<template>
  <div>
      <van-tabs v-model="activeName">
        <van-tab title="过程信息" name="process">过程信息</van-tab>
        <van-tab title="证书信息" name="certificate">证书信息</van-tab>
      </van-tabs>
  </div>
</template>

<script>
    import { Tab, Tabs } from 'vant';

    export default {
        name: 'process-info',
        components:{
            "van-tab":Tab,
            "van-tabs":Tabs
        },
        data() {
            return {
                activeName: "process"
            }
        }
    }
</script>

<style>

</style>