<template>
  <div>
    <PHeader>行政审批</PHeader>
    <van-search
      v-model="keyword"
      placeholder="请输入搜索关键词"
    />
    <!-- 这里给两个图片留个地方 -->
    <ul class="licenseCard">
      <li class="upComing">
        <p>许可代办</p>
        <label>99</label>
      </li>
      <li class="done">
        <p>许可已办</p>
        <label>210</label>
      </li>
    </ul>
    <van-tabs
      v-model="active"
      sticky
    >
      <van-tab title="许可待办">
        <platform-list :list="list1">
          <template #fixed="{slotProps}">
            <van-row class="org-info">
              <van-col
                span="12"
                class="org-name"
                @click="goVerificationInfo(slotProps.index)"
              >{{slotProps.orgname}}</van-col>
              <van-col
                span="12"
                class="org-tags"
              >
                <!-- <van-tag plain round :type="slotProps.state1Type" class="mr10" >{{slotProps.state1}}</van-tag> -->
                <van-tag
                  plain
                  round
                  :type="slotProps.state2Type"
                >{{slotProps.state2}}</van-tag>
              </van-col>
            </van-row>
            <van-cell
              title="许可事项"
              value="特种设备安装改造维修许可"
            />
            <van-cell
              title="产品类别"
              value="测量用电流互感器"
            />
            <van-cell
              title="工作时限(单位:工作日)"
              value="烟台市市场监督管理局"
            />
          </template>
        </platform-list>
      </van-tab>
      <van-tab title="许可已办">
        <platform-list :list="list2">
          <template #fixed="{slotProps}">
            <van-row class="org-info">
              <van-col
                span="16"
                class="org-name"
                @click="checkMoreDetails()"
              >{{slotProps.orgname}}</van-col>
              <van-col
                span="8"
                class="org-tags"
              >
                <van-tag
                  plain
                  round
                  :type="slotProps.state2Type"
                >{{slotProps.state2}}</van-tag>
              </van-col>
            </van-row>
            <van-cell
              title="许可事项"
              value="特种设备安装改造维修许可"
            />
            <van-cell
              title="所在地区"
              value="淄博市周村区"
            />
          </template>
        </platform-list>
      </van-tab>
      <!-- <van-tab title="综合查询">
        <platform-list :list="list3">
          <template #fixed="{slotProps}">
            <van-row class="org-info">
              <van-col
                span="16"
                class="org-name"
                @click="goSynthesis(slotProps.index)"
              >{{slotProps.orgname}}</van-col>
              <van-col
                span="8"
                class="org-tags"
              >
                <van-tag
                  plain
                  round
                  :type="slotProps.state2Type"
                >{{slotProps.state2}}</van-tag>
              </van-col>
            </van-row>
            <van-cell
              title="许可事项"
              value="特种设备安装改造维修许可"
            />
            <van-cell
              title="所在地区"
              value="淄博市周村区"
            />
            <van-cell title="所处环节">
              <span @click="goReturnable(slotProps.state2)">{{slotProps.state2}}</span>
            </van-cell>
            <van-cell
              title="简化流程"
              value="是"
            />
          </template>
        </platform-list>
      </van-tab> -->
    </van-tabs>
    <van-tabbar v-model="active">
      <van-tabbar-item
        icon="wap-home-o"
        to="/admin-ListView"
      >首页</van-tabbar-item>
      <van-tabbar-item
        icon="user-o"
        to="/admin-UserCenterView"
      >个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import Vue from "vue";
import PHeader from "../../components/PHeader.vue";
import platformList from "../platform/common/platformList";
import { Search, Tabbar, TabbarItem } from "vant";

Vue.use(Search);
Vue.use(Tabbar);
Vue.use(TabbarItem);
export default {
  data() {
    return {
      keyword: "",
      active: 0,
      finished: true,
      loading: false,
      list1: [
        {
          orgname: "山东群英电气有限公司1",
          index: 1,
          state1: "超期50天",
          state1Type: "danger",
          state2: "发证",
          state2Type: "success",
        },
      ],
      list2: [
        {
          orgname: "青岛飞鹰达机械设备有限公司",
          index: 1,
          state1: "",
          state1Type: "danger",
          state2: "发证",
          state2Type: "success",
        },
        {
          orgname: "青岛飞鹰达机械设备有限公司",
          index: 1,
          state1: "",
          state1Type: "danger",
          state2: "变更",
          state2Type: "success",
        },
        {
          orgname: "青岛飞鹰达机械设备有限公司",
          index: 1,
          state1: "",
          state1Type: "danger",
          state2: "换证",
          state2Type: "success",
        },
      ],
      list3: [
        {
          orgname: "青岛计量技术研究院",
          index: 1,
          state1: "",
          state1Type: "danger",
          state2: "已提交",
          state2Type: "success",
        },
        {
          orgname: "青岛计量技术研究院",
          index: 1,
          state1: "",
          state1Type: "danger",
          state2: "材料退回",
          state2Type: "success",
        },
        {
          orgname: "青岛计量技术研究院",
          index: 1,
          state1: "",
          state1Type: "danger",
          state2: "材料补正",
          state2Type: "success",
        },
      ],
    };
  },
  components: { platformList, PHeader },
  methods: {
    goVerificationInfo(ind) {
      console.info("当前点击的索引是：" + ind);
      this.$router.push("/admin-InfoView");
    },
    checkMoreDetails(){
      this.$router.push("/admin-DetailView");
    }
    
    //综合查询 -- 》材料退回 
    // goReturnable(value) {
    //   if (value == "材料退回") {
    //     this.$router.push("/admin-ReturnableView");
    //   } else if (value == "材料补正") {
    //     this.$router.push("/admin-CorrectionView");
    //   }
    // },
  },
};
</script>
<style lang="less" scoped>
.van-radio,
.van-button,
.van-notice-bar {
  padding: 10px 16px;
}

.van-radio {
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