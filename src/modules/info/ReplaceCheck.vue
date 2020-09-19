<template>
  <div class="index">
    <PHeader :showArrow="true">申请信息</PHeader>
        <platform-list :list="resultList">
          <template #fixed="{slotProps}">
            <van-cell title="序号" :value="slotProps.kind" />
            <van-cell title="产品单元">
              <a href="javascript:void(0)" @click="goVarietiesInfo(slotProps.id)">{{slotProps.unitname}}</a>
            </van-cell>
            <van-cell title="是否申请免检">{{slotProps.isfreefztest|dictFormatter("isShowYesAndNo")}}</van-cell>
          </template>
        </platform-list>
  </div>
</template>

<script>
import PHeader from "../../components/PHeader.vue";
import platformList from "../platform/common/platformList";
export default {
  name: "replaceCheck",
  components: {
    platformList,
    PHeader
  },
  data() {
    return {
      resultList: []
    };
  },
  methods:{
    goVarietiesInfo(id){
      client.saveStorage("varietiesInfo", {
        "neaid":this.companyProcessInfo.id,
        "unitid":id
      });
      this.$router.push("/change-check");
    }
  },
  created(){
    this.companyProcessInfo = client.loadStorage("companyProcessInfo");

    //品种信息
    client.rpc("/xxgs/gy/getGcxx/sqxm",{"neaid":this.companyProcessInfo.id}).then(res=>{
      this.resultList = res;
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
  }
  .org-tags {
    text-align: right;
  }
}
</style>