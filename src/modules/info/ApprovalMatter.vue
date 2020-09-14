<template>
  <div class="index">
    <PHeader :showArrow="true">审批事项</PHeader>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad" class="mt10" >
      <van-cell v-for="item in list" :key="item.caption" :title="item.caption" is-link @click="goInfo(item)" />
    </van-list>
  </div>
</template>

<script>
import PHeader from "../../components/PHeader.vue";
import platformList from "../common/platformList";
export default {
  name: "index",
  components: {
    platformList,
    PHeader
  },
  data() {
    return {
      finished: true,
      loading: false,
      list: []
    };
  },
  methods:{
    onLoad(){},
    goInfo(item){
      client.saveStorage("approvalInfo", item);
      this.$router.push("/info");
    }
  },
  created(){
    client.rpc("/dic/getSpxx").then(res=>{
        this.list = res;
    });
  }
};
</script>

<style lang="less" scoped>
.van-radio,
.van-button,
.van-notice-bar{
  padding: 10px 16px;
}

.van-radio{
  padding: 10px 16px;
  overflow: hidden;
  font-size: 14px;
  line-height: 24px;
}

.org-info {
  padding: 0.1rem 0.15rem;
  color: #7b7b7b;
  .org-name {
    font-size: 0.16rem;
    color: #1989fa;
  }
  .org-tags {
    text-align: right;
  }
}
</style>