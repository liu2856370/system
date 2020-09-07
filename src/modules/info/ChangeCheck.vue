<template>
  <div class="index">
    <van-notice-bar color="#1989fa" background="#ecf9ff" left-icon="info-o" >以最终技术审查结果和许可审批结果为准</van-notice-bar>
    <van-tabs type="card" v-model="active" sticky>
      <van-tab title="核查结果">
        <platform-list :list="list1">
          <template #fixed="{slotProps}">
            <van-cell title="计量器具名称" value="电压互感器" />
            <van-cell title="型号" value="JDZ(X)10-10" />
            <van-cell title="规格" value="（5-1000）/5A" />
            <van-cell title="准确度等级/最大允许误差/测量部准确度" value="0.2s/10P 10级" />
            <van-cell title="实地核查结果" value="合格" />
            <van-cell title="检定规程及编号" value="GB1208-2010" />
            <van-cell title="技术审查意见" value="合格" />
            <van-cell title="抽查复查结论" value="未抽查" />
            <van-cell title="许可意见" value="许可" />
            <van-cell title="不予行政许可理由" value="" />
          </template>
        </platform-list>
      </van-tab>
      <van-tab title="实地核查结论">
        <van-cell title="核查开始时间" value="2013-06-28" />
        <van-cell title="核查结束时间" value="2013-06-28" />
        <van-cell title="实际开始时间" value="2013-06-28" />
        <van-cell title="实际结束时间" value="2013-06-28" />
        <van-cell title="实地核查记录备用说明" value="" />
        <platform-list :list="list2">
          <template #fixed="{slotProps}">
            <van-cell title="计量器具类别" value="测量电压互感器" />
            <van-cell title="计量器具名称" value="电压互感器" />
            <van-cell title="型号" value="JDZ(X)10-10" />
            <van-cell title="规格" value="（5-1000）/5A" />
            <van-cell title="准确度等级/最大允许误差/测量部准确度" value="0.2s/10P 10级" />
            <van-cell title="实地核查结果" value="合格" />
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
      ],
      list2: [
        { orgname: "山东群英电气有限公司1" },
        { orgname: "山东群英电气有限公司2" },
        { orgname: "山东群英电气有限公司3" },
        { orgname: "山东群英电气有限公司4" },
        { orgname: "山东群英电气有限公司5" },
        { orgname: "山东群英电气有限公司6" }
      ],
      data:[
        "工业产品生产许可证获证单位",
        "计量器具型式批准许可证获证单位",
        "工业产品生产许可证获证单位",
        "计量器具型式批准许可证获证单位",
        "工业产品生产许可证获证单位",
        "计量器具型式批准许可证获证单位",
        "工业产品生产许可证获证单位",
        "计量器具型式批准许可证获证单位",
        "工业产品生产许可证获证单位",
        "计量器具型式批准许可证获证单位"
      ]
    };
  },
  methods:{
    onLoad(){},
    goQualificationsList(){
      this.$router.push("/qualifications")
    },
    goVerificationInfo(index){
      if(index === 1){
        this.$router.push();
      }
      else if(index === 2){
        this.$router.push();
      }
      else{
        this.$router.push();
      }
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