<template>
  <div class="index">
    <PHeader :showArrow="true">品种信息</PHeader>
        <platform-list :list="list1">
          <template #fixed>
            <van-cell title="产品品种" value="工业用丙烯晴" />
            <van-cell title="规格型号" value="JDZ(X)10-10" />
            <van-cell title="产品标准" value="GB1208-2010" />
            <van-cell title="年设计生产能力" value="13万吨" />
            <van-cell title="申请类别" value="发证" />
            <van-cell title="涉及产业政策情况" value="GB1208-2010" />
            <van-cell title="生产地址" value="山东省菏泽市" />
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
      list1: [
        { 
          orgname: "山东群英电气有限公司1",
          index: 1
        },
        { 
          orgname: "山东群英电气有限公司2",
          index: 2
        },
        { 
          orgname: "山东群英电气有限公司3",
          index: 3
        }
      ]
    };
  },
  methods:{
    
  },
  created(){
    this.companyProcessInfo = client.loadStorage("companyProcessInfo");

    // //核查结果
    // client.rpc("/xxgs/jl/getGcxx/xspz/hcjg/" + this.companyProcessInfo.id).then(res=>{
    //   this.resultList = res;
    // });

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