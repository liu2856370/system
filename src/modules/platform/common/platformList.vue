<template>
  <div class="list">
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-cell-group v-for="item in list" :key="item" class="mt10">
        <van-row class="org-info">
            <van-col span="12" class="org-name">山东群英电器有限公司</van-col>
            <van-col span="12" class="org-tags">
                <van-tag plain round type="primary" class="mr10">准许许可</van-tag>
                <van-tag plain round type="primary">发证</van-tag>
            </van-col>
        </van-row>
        <van-cell title="许可事项" value="工业产品生产许可" />
        <van-cell title="产品类别" value="测量用电流互感器" />
        <van-cell title="产品名称" value="测量用电流互感器" />
        <van-cell title="提交单位" value="烟台市市场监督管理局" />
        <van-cell title="主动撤回日期" value="2020-01-15" />
        <van-cell title="申办号/密码" value="0/0" />
        <van-cell title="现场审查计划通知书">
          <template #right-icon>
            <van-tag plain round type="primary">查看</van-tag>
          </template>
        </van-cell>
      </van-cell-group>
    </van-list>
  </div>
</template>

<script>
export default {
  name: "platformList",
  props: {
    list: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      loading: false,
      finished: false,
    }
  },
  methods:{
      onLoad(){}
  }
};
</script>

<style lang="less" scoped>
.org-info{
    padding: 0.1rem 0.15rem;
    color: #7b7b7b;
    .org-name{
        font-size:0.16rem;
    }
    .org-tags{
        text-align: right;
    }
}

</style>