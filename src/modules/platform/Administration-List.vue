<template>
    <div>
        <van-search
        v-model="keyword"
        placeholder="请输入搜索关键词"
        />
        <!-- 这里给两个图片留个地方 -->
        <van-tabs v-model="active" sticky>
                <van-tab title="许可代办">
                    <platform-list :list="list1">
                    <template #fixed="{slotProps}">
                    <van-row class="org-info">
                    <van-col span="12" class="org-name" @click="goVerificationInfo(slotProps.index)">{{slotProps.orgname}}</van-col>
                    <van-col span="12" class="org-tags">
                        <van-tag
                        plain
                        round
                        :type="slotProps.state1Type"
                        class="mr10"
                        >{{slotProps.state1}}</van-tag>
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
                </template>
                    <template #variable>
                        <van-cell
                        title="审查结论"
                        value="烟台市市场监督管理局"
                        />
                        <van-cell
                        title="检验结论"
                        value="2020-01-15"
                        />
                        <van-cell
                        title="材料齐全"
                        value="0/0"
                        />
                        <van-cell
                        title="工作时限(单位:工作日)"
                        value="烟台市市场监督管理局"
                        />
                        <van-cell
                        title="免现场核审"
                        value="2020-01-15"
                        />
                        <van-cell
                        title="简化审核"
                        value="是"
                        />
                    </template>
                </platform-list>
            </van-tab>
            <van-tab title="许可已办">
                    <platform-list :list="list2">
                    <template #fixed="{slotProps}">
                    <van-row class="org-info">
                    <van-col span="12" class="org-name" @click="goPermission(slotProps.index)">{{slotProps.orgname}}</van-col>
                    <van-col span="12" class="org-tags">
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
            <van-tab title="综合查询">
                    <platform-list :list="list3">
                    <template #fixed="{slotProps}">
                    <van-row class="org-info">
                    <van-col span="12" class="org-name" @click="goSynthesis(slotProps.index)">{{slotProps.orgname}}</van-col>
                    <van-col span="12" class="org-tags">
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
                    <van-cell
                    title="所处环节"
                    value="已提交至材料接收处"
                    />
                    <van-cell
                    title="简化流程"
                    value="是"
                    />
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
    import Vue from "vue";
    import platformList from "../platform/common/platformList";
    import { Search, Tabbar, TabbarItem } from "vant";

    Vue.use(Search);
    Vue.use(Tabbar);
    Vue.use(TabbarItem);
    export default{
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
                }
            ],
            list2:[
                {
                orgname: "青岛飞鹰达机械设备有限公司",
                index: 1,
                state1: "",
                state1Type: "danger",
                state2: "发证",
                state2Type: "success",
                }
            ],
            list3:[
                {
                    orgname: "青岛计量技术研究院",
                    index: 1,
                    state1: "",
                    state1Type: "danger",
                    state2: "发证",
                    state2Type: "success",
                }
            ]
        };
  },
    components: {platformList },
    methods: {
        goVerificationInfo(ind) {
            console.info("当前点击的索引是：" + ind);
            this.$router.push("/admin-InfoView");
        },
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