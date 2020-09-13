<template>
  <div class="index">
    <van-tabs v-model="active" sticky>
      <van-tab title="核查结果">
        <platform-list :list="resultList">
          <template #fixed="{slotProps}">
            <van-cell title="产品单元" :value="slotProps.unitname" />
            <van-cell title="产品品种" :value="slotProps.kind" />
            <van-cell title="规格型号" :value="slotProps.cellmodel" />
            <van-cell title="生产地址" :value="slotProps.addrs" />
            <van-cell title="实地核查结果">{{slotProps.ispass|dictFormatter("ispassList")}}</van-cell>
            <van-cell title="发证检验结果">{{slotProps.testresult|dictFormatter("ispassList")}}</van-cell>
            <van-cell title="技术审查意见">{{slotProps.ischeckfilepass|dictFormatter("ischeckfilepassList")}}</van-cell>
            <van-cell title="抽查复查结论">{{slotProps.isccfspass|dictFormatter("isccfspassList")}}</van-cell>
            <van-cell title="许可建议">{{slotProps.isxukepass|dictFormatter("isxukepassList")}}</van-cell>
            <van-cell title="不予行政许可理由" value="尚未提供字段" />
          </template>
        </platform-list>
      </van-tab>
      <van-tab title="拟许可范围">
        <van-cell title="单位名称" :value="permitData.orgname" />
        <van-cell title="产品名称" :value="permitData.producttype" />
        <van-cell title="住所" :value="permitData.abode" />
        <van-cell title="生产地址" :value="permitData.prodaddrxx" />
        <van-cell title="拟许可范围" :value="permitData.certinfo" />
        <van-notice-bar wrapable :scrollable="false" text="备注：拟许可范围内容如果需要修改，请同步修改“技术审查确认信息”中的相关数据" />
      </van-tab>
      <van-tab title="实地核查结论">
        <van-cell title="检核开始时间" :value="conclusionData.plansdate" />
        <van-cell title="检核结束时间" :value="conclusionData.planedate" />
        <van-cell title="实际开始时间" :value="conclusionData.realplansdate" />
        <van-cell title="实际结束时间" :value="conclusionData.realplanedate" />
        <van-cell title="实地核查记录备用说明" :value="conclusionData.remark" />
        <platform-list :list="conclusionData.prodList">
          <template #fixed="{slotProps}">
            <van-cell title="产品单元" :value="slotProps.unitname" />
            <van-cell title="产品品种" :value="slotProps.kind" />
            <van-cell title="产品规格型号" :value="slotProps.cellmodel" />
            <van-cell title="实地核查结论">{{slotProps.ispass|dictFormatter("checkResultList")}}</van-cell>
          </template>
        </platform-list>
      </van-tab>
      <van-tab title="不合格项汇总">
        <van-cell title="请选择单元">
            <!-- <template #right-icon>
                <van-tag plain round type="primary">查看</van-tag>
            </template> -->
        </van-cell>
        <platform-list :list="list2">
          <template #fixed="{slotProps}">
            <van-cell title="不合符条款" value="盐酸" />
            <van-cell title="核查项目" value="复产盐酸" />
            <van-cell title="频次" value="" />
            <van-cell title="改进建议" value="合格" />
            <van-cell title="缺陷事实描述" value="合格" />
            <van-cell title="整改要求" value="合格" />
          </template>
        </platform-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import platformList from "../platform/common/platformList";
export default {
  name: "index",
  components: {
    platformList
  },
  data() {
    return {
      active: 0,
      finished: true,
      loading: false,
      resultList: [],
      permitData: {},
      conclusionData: {},
      list2: [
        { orgname: "山东群英电气有限公司1" },
        { orgname: "山东群英电气有限公司2" },
        { orgname: "山东群英电气有限公司3" },
        { orgname: "山东群英电气有限公司4" },
        { orgname: "山东群英电气有限公司5" },
        { orgname: "山东群英电气有限公司6" }
      ]
    };
  },
  methods:{
    onLoad(){}
  },
  created(){
    this.companyProcessInfo = client.loadStorage("companyProcessInfo");

    //审查中、许可中、已发证、不予许可调用接口
    if(50000 <= this.companyProcessInfo.state <= 80000 || parentInt(this.companyProcessInfo.state) === 10700){
      //核查结果
      client.rpc("/xxgs/gy/getGcxx/hcjg",{"neaid":this.companyProcessInfo.id}).then(res=>{
        this.resultList = res;
      });

      //拟许可范围
      client.rpc("/xxgs/gy/getGcxx/nxkfw",{"neaid":this.companyProcessInfo.id}).then(res=>{
        this.permitData = res;
        console.log(res)
      });

      //实地核查结论
      client.rpc("/xxgs/gy/getGcxx/sdhcjl",{"neaid":this.companyProcessInfo.id}).then(res=>{
        this.conclusionData = res;
      });

      //不合格项汇总
      // client.rpc("/xxgs/gy/getGcxx/bhgx/" + this.companyProcessInfo.id + "/" + ).then(res=>{
      //   this.conclusionData = res;
      //   console.log(res)
      // });
    }
    //受理中、计划中调用接口
    else if (20000 <= this.companyProcessInfo.state < 50000){

    }
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

.van-notice-bar{
  background-color: #fff;
  color: #ccc;
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