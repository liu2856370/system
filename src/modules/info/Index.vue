<template>
  <div class="index">
    <van-tabs v-model="active" sticky>
      <van-tab title="过程信息">
        <info-list :list="list1">
          <template #default="{slotProps}">
            <van-row class="org-info">
              <van-col span="12" class="org-name">{{slotProps.orgname}}</van-col>
              <van-col span="12" class="org-tags">
                <van-tag plain round type="primary" class="mr10">审查中</van-tag>
                <van-tag plain round type="primary">发证</van-tag>
              </van-col>
            </van-row>
            <van-cell title="产品类别" value="危险化学品" />
            <van-cell title="审批事项" value="工业产品生产许可" />
            <van-cell title="所在地区" value="菏泽市成武县" />
            <van-cell title="营业执照注册号" value="0254215421357561354" />
            <van-cell title="组织机构代码" value="05165415X" />
          </template>
        </info-list>
      </van-tab>
      <van-tab title="证书信息">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <van-cell-group v-for="(item,index) in data" :key="index" class="mt10">
            <van-radio name=index>{{item}}</van-radio>
          </van-cell-group>
        </van-list>
        <van-button type="primary" size="large" to="/qualifications">下一步</van-button>
        <van-notice-bar color="#1989fa" background="#ecf9ff" left-icon="info-o" >证书如需邮寄送达，请于当地业务窗口联系告知邮寄地址、收件人等信息，便于邮寄</van-notice-bar>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import infoList from "./common/InfoList";
export default {
  name: "index",
  components: {
    infoList
  },
  data() {
    return {
      active: 0,
      loading: false,
      finished: true,
      list1: [
        {
          orgname: "山东群英电气有限公司1"
        },
        {
          orgname: "山东群英电气有限公司2"
        },
        {
          orgname: "山东群英电气有限公司"
        }
      ],
      list2: [
        {
          orgname: "山东群英电气有限公司1"
        },
        {
          orgname: "山东群英电气有限公司2"
        },
        {
          orgname: "山东群英电气有限公司3"
        }
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
    onLoad(){}
  }
};
</script>

<style>
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
</style>