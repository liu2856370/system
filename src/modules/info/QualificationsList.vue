<template>
  <div class="index">
        <info-list :list="list1">
          <template #default="{slotProps}">
            <van-row class="org-info">
              <van-col span="12" class="org-name">{{slotProps.orgname}}</van-col>
              <van-col span="12" class="org-tags"></van-col>
            </van-row>
            <van-cell title="许可事项名称" value="工业产品生产许可" />
            <van-cell title="产品类别" value="人造板" />
            <van-cell title="许可编号" value="（鲁）XK13-008-00004" />
            <van-cell title="所在地区" value="青岛市崂山区" />
            <van-cell title="营业执照注册号" value="416510564065411324" />
            <van-cell title="组织机构代码" value="05165415X" />
            <van-cell title="有效期" value="05165415X" />
            <van-cell title="审批部门" value="05165415X" />
            <van-row class="org-info">
              <van-col span="12" class="org-name">设定依据</van-col>
              <van-col span="12" class="org-tags">查看</van-col>
            </van-row>
          </template>
        </info-list>
  </div>
</template>

<script>
import infoList from "./common/InfoList";
export default {
  name: "qualificationsList",
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
          orgname: "山东群英电气有限公司3"
        }
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