<template>
  <div class="index">
    <PHeader :showArrow="true">核查信息</PHeader>
    <van-notice-bar color="#1989fa" background="#ecf9ff" left-icon="info-o" >以最终技术审查结果和许可审批结果为准</van-notice-bar>
    <van-tabs type="card" v-model="active" sticky>
      <van-tab title="核查结果">
        <platform-list :list="resultList">
          <template #fixed="{slotProps}">
            <van-cell title="计量器具名称" :value="slotProps.itemname" />
            <van-cell title="型号" :value="slotProps.model" />
            <van-cell title="规格" :value="slotProps.type" />
            <van-cell title="准确度等级/最大允许误差/测量部准确度" :value="slotProps.accuracy" />
            <van-cell title="实地核查结果">{{slotProps.ispass|dictFormatter("ispassList")}}</van-cell>
            <van-cell title="检定规程及编号" value="未提供字段" />
            <van-cell title="技术审查意见">{{slotProps.ischeckfilepass|dictFormatter("ischeckfilepassList")}}</van-cell>
            <van-cell title="抽查复查结论">{{slotProps.isccfspass|dictFormatter("isccfspassList")}}</van-cell>
            <van-cell title="许可建议">{{slotProps.isxukepass|dictFormatter("isxukepassList")}}</van-cell>
            <van-cell title="不予行政许可理由" :value="slotProps.reason" />
          </template>
        </platform-list>
      </van-tab>
      <van-tab title="实地核查结论">
        <van-cell title="核查开始时间" :value="conclusionData.plansdate" />
        <van-cell title="核查结束时间" :value="conclusionData.planedate" />
        <van-cell title="实际开始时间" :value="conclusionData.realplansdate" />
        <van-cell title="实际结束时间" :value="conclusionData.realplanedate" />
        <van-cell title="实地核查记录备用说明" :value="conclusionData.remark" />
        <platform-list :list="conclusionData.itemList">
          <template #fixed="{slotProps}">
            <van-cell title="计量器具类别" :value="slotProps.prodname" />
            <van-cell title="计量器具名称" :value="slotProps.itemname" />
            <van-cell title="型号" :value="slotProps.type" />
            <van-cell title="规格" :value="slotProps.model" />
            <van-cell title="准确度等级/最大允许误差/测量部准确度" :value="slotProps.accuracy" />
            <van-cell title="实地核查结果">{{slotProps.ispass|dictFormatter("ispassList")}}</van-cell>
            <van-cell title="检验报告">
              <template #right-icon>
                <van-tag plain round type="primary">查看</van-tag>
              </template>
            </van-cell>
          </template>
        </platform-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import PHeader from "../../components/PHeader.vue";
import platformList from "../platform/common/platformList";
export default {
  name: "index",
  components: {
    platformList,
    PHeader
  },
  data() {
    return {
      active: 0,
      finished: true,
      loading: false,
      resultList: [{
        "itemname":"计量器具名称",
        "model":"型号",
        "type":"规格",
        "accuracy":"准确度等级",
        "ispass":"1",
        "isshenchapass":"1",
        "isccfspass":"1",
        "isxukepass":"1",
        "reason":"不予行政许可理由",
      }],
      conclusionData: {
        "plansdate":"2020-12-12",
        "planedate":"2020-12-12",
        "realplansdate":"2020-12-12",
        "realplanedate":"2020-12-12",
        "remark":"实地核查记录备用说明",
        "itemList":[{
          "prodname":"计量器具类别",
          "itemname":"计量器具名称",
          "type":"规格",
          "model":"型号",
          "accuracy":"准确度",
          "ispass":"1"
        }]
      }
    };
  },
  methods:{
    onLoad(){}
  },
  created(){
    this.companyProcessInfo = client.loadStorage("companyProcessInfo");

    // //核查结果
    // client.rpc("/xxgs/gy/getGcxx/hcjg",{"neaid":this.companyProcessInfo.id}).then(res=>{
    //   this.resultList = res;
    //   console.log(res)
    // });

    // //实地核查结论
    // client.rpc("/xxgs/gy/getGcxx/sdhcjl",{"neaid":this.companyProcessInfo.id}).then(res=>{
    //   this.conclusionData = res;
    //   this.itemList = res.itemList;
    //   console.log(res)
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