<template>
  <div class="index">
    <van-tabs v-model="active" sticky>
      <van-tab title="核查结果">
        <platform-list :list="list1">
          <template #fixed="{slotProps}">
            <van-cell title="产品单元" value="盐酸" />
            <van-cell title="产品品种" value="复产盐酸" />
            <van-cell title="规格型号" value="" />
            <van-cell title="生产地址" value="山东省菏泽市成武县" />
            <van-cell title="实地核查结果" value="合格" />
            <van-cell title="发证检验结果" value="合格" />
            <van-cell title="技术审查意见" value="合格" />
            <van-cell title="抽查复查结论" value="未抽查" />
            <van-cell title="许可建议" value="许可" />
            <van-cell title="不予行政许可理由" value="" />
          </template>
        </platform-list>
      </van-tab>
      <van-tab title="拟许可范围">
        <van-cell title="单位名称" value="成武县晨晖环保科技有限公司" />
        <van-cell title="产品名称" value="氯碱" />
        <van-cell title="住所" value="成武县聊商路" />
        <van-cell title="生产地址" value="山东省菏泽市成武县" />
        <van-cell title="拟许可范围" value="合格" />
      </van-tab>
      <van-tab title="实地核查结论">
        <van-cell title="检核开始时间" value="2013-06-28" />
        <van-cell title="检核结束时间" value="2013-06-28" />
        <van-cell title="实际开始时间" value="2013-06-28" />
        <van-cell title="实际结束时间" value="2013-06-28" />
        <van-cell title="实地核查记录备用说明" value="" />
        <platform-list :list="list2">
          <template #fixed="{slotProps}">
            <van-cell title="产品单元" value="盐酸" />
            <van-cell title="产品品种" value="复产盐酸" />
            <van-cell title="产品规格型号" value="" />
            <van-cell title="实地核查结论" value="合格" />
          </template>
        </platform-list>
      </van-tab>
      <van-tab title="不合格项汇总">
        <van-cell title="请选择单元">
            <!-- <template #right-icon>
                <van-tag plain round type="primary">查看</van-tag>
            </template> -->
        </van-cell>
        <van-cell title="检核开始时间" value="2013-06-28" />
        <van-cell title="检核结束时间" value="2013-06-28" />
        <van-cell title="实际开始时间" value="2013-06-28" />
        <van-cell title="实际结束时间" value="2013-06-28" />
        <platform-list :list="list2">
          <template #fixed="{slotProps}">
            <van-cell title="产品单元" value="盐酸" />
            <van-cell title="产品品种" value="复产盐酸" />
            <van-cell title="产品规格型号" value="" />
            <van-cell title="实地核查结论" value="合格" />
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