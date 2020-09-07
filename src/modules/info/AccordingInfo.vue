<template>
  <div class="index">
        <platform-list :list="list1">
          <template #fixed="{slotProps}">
            <van-row class="org-info">
              <van-col span="12" class="org-name" @click="goInfoQuery">{{slotProps.orgname}}</van-col>
              <van-col span="12" class="org-tags"></van-col>
            </van-row>
            <van-cell title="许可事项名称" value="工业产品生产许可" />
            <van-cell title="产品类别" value="人造板" />
            <van-cell title="许可证编号" value="（鲁）XK13-008-00004" />
          </template>
          <template #variable>
            <van-cell title="所在地区" value="青岛市崂山区" />
            <van-cell title="营业执照注册号" value="416510564065411324" />
            <van-cell title="组织机构代码" value="05165415X" />
            <van-cell title="有效期" value="05165415X" />
            <van-cell title="审批部门" value="05165415X" />
            <van-cell title="设定依据">
              <template #right-icon>
                <van-tag plain round type="primary" @click="queryBasisList">查看</van-tag>
              </template>
            </van-cell>
          </template>
        </platform-list>
  </div>
</template>

<script>
import platformList from "../platform/common/platformList";
export default {
name: "accordingInfo",
  components: {
    platformList
  },
  data() {
    return {
      active: 0,
      list1: [
        { orgname: "山东群英电气有限公司1" },
        { orgname: "山东群英电气有限公司2" },
        { orgname: "山东群英电气有限公司3" }
      ]
    };
  },
  methods:{
    goInfoQuery(){
      this.$router.push("/info-query");
    },
    queryBasisList(){
      this.$router.push("/set-basis-list");
    }
  }
}
</script>

<style>

</style>