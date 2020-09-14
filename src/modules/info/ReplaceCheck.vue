<template>
  <div class="index">
    <PHeader :showArrow="true">品种信息</PHeader>
        <platform-list :list="resultList">
          <template #fixed="{slotProps}">
            <van-cell title="产品品种" :value="slotProps.kind" />
            <van-cell title="规格型号" :value="slotProps.cellmodel" />
            <van-cell title="产品标准" :value="slotProps.cellexecstandard" />
            <van-cell title="年设计生产能力" :value="slotProps.designability" />
            <van-cell title="申请类别" :value="slotProps.applydescription" />
            <van-cell title="涉及产业政策情况" :value="slotProps.policyremark" />
            <van-cell title="生产地址" :value="slotProps.addr" />
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
      active: 0,
      resultList: []
    };
  },
  methods:{
    
  },
  created(){
    this.companyProcessInfo = client.loadStorage("companyProcessInfo");

    //品种信息
    client.rpc("/xxgs/gy/getGcxx/sqxm",{"neaid":this.companyProcessInfo.id}).then(sqxmRes=>{
      client.rpc("/xxgs/gy/getGcxx/sqxmpz",{"neaid":this.companyProcessInfo.id,"unitid":sqxmRes[0].id}).then(res=>{
        this.resultList = res;
        console.log(res)
      });
    });


    //  //实地核查结论
    // client.rpc("/xxgs/jl/getGcxx/xspz/sdhcjl/" + this.companyProcessInfo.id).then(res=>{
    //   this.conclusionData = res;
    // });
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