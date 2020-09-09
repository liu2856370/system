<template>
  <div class="index">
    <van-tabs v-model="active" sticky>
      <van-tab title="申报历史">
        <platform-list :list="list1">
          <template #fixed="{slotProps}">
            <van-row class="org-info">
              <van-col span="12" class="org-name">{{slotProps.orgname}}</van-col>
              <van-col span="12" class="org-tags">
                <van-tag plain round type="primary" class="mr10">准许许可</van-tag>
                <van-tag plain round type="primary">发证</van-tag>
              </van-col>
            </van-row>
            <van-cell title="许可事项" value="工业产品生产许可" />
            <van-cell title="产品类别" value="测量用电流互感器" />
          </template>
           <template #variable>
            <van-cell title="产品名称" value="测量用电流互感器" />
            <van-cell title="提交单位" value="烟台市市场监督管理局" />
            <van-cell title="主动撤回日期" value="2020-01-15" />
            <van-cell title="申办号/密码" value="0/0" />
            <van-cell title="现场审查计划通知书">
              <template #right-icon>
                <van-tag plain round type="primary">查看</van-tag>
              </template>
            </van-cell>
          </template>
        </platform-list>
      </van-tab>
      <van-tab title="许可档案">
        <platform-list :list="list2">
          <template #fixed="{slotProps}">
            <van-row class="org-info">
              <van-col span="12" class="org-name" @click="goPermitArchiver">{{slotProps.orgname}}</van-col>
              <van-col span="12" class="org-tags">
                <van-tag plain round type="primary" class="mr10">准许许可</van-tag>
                <van-tag plain round type="primary">发证</van-tag>
              </van-col>
            </van-row>
            <van-cell title="许可事项" value="工业产品生产许可" />
            <van-cell title="产品类别" value="测量用电流互感器" />
          </template>
           <template #variable>
            <van-cell title="产品名称" value="测量用电流互感器" />
            <van-cell title="申办号/密码" value="0/0" />
          </template>
        </platform-list>
      </van-tab>
    </van-tabs>

    <van-tabbar v-model="activeTabbar">
      <van-tabbar-item icon="wap-home-o" to="/platform">首页</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/user-center">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import platformList from "../common/platformList";
export default {
  name: "index",
  components: {
    platformList,
  },
  data() {
    return {
      active: 0,
      activeTabbar: 0,
      list1: [
        { orgname: "山东群英电气有限公司1" },
        { orgname: "山东群英电气有限公司2" },
        { orgname: "山东群英电气有限公司3" },
      ],
      list2: [
        { orgname: "山东群英电气有限公司1" },
        { orgname: "山东群英电气有限公司2" },
        { orgname: "山东群英电气有限公司3" },
        { orgname: "山东群英电气有限公司4" },
        { orgname: "山东群英电气有限公司5" }
      ]
    };
  },
  methods:{
    goPermitArchiver(){
      this.$router.push("/permit-archiver");
    }
  }
};
</script>


<style lang="less" scoped>
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