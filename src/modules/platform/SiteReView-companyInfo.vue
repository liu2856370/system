<template>
  <div>
    <PHeader>山东群英电气有限公司</PHeader>
    <van-tabs
      v-model="active"
      class="mt10 mb60"
    >
      <van-tab title="评审信息">
        <van-cell-group>
          <van-cell
            title="计划标题"
            value="关于山东泰汶盐化工有限责任公司的审查计划"
          />
          <van-cell
            title="计划编号"
            value="scbgy-11-20-064"
          />
          <van-cell
            title="评审开始时间"
            value="2020-07-04"
          />
          <van-cell
            title="评审结束时间"
            value="2020-07-04"
          />
          <van-cell title="现场核查通知书">
            <template #default>
              <van-tag type="primary">查看</van-tag>
            </template>
          </van-cell>
        </van-cell-group>

        <van-cell-group class="mt10">
          <van-cell
            title="现场签到"
            center
          >
            <template #right-icon>
              <van-icon
                color="#707070"
                name="location-o"
              />签到拍照
            </template>
          </van-cell>
        </van-cell-group>

        <div class="whiteBg">
          <van-tabs type="card">
            <van-tab title="评审单位">
              <template>
                <van-cell-group class="mt10">
                  <van-cell
                    title="申请人名称"
                    value="山东泰汶盐化工有限责任公司"
                  />
                  <van-cell title="生产地址">
                    <template #default>
                      <van-tag type="primary">查看</van-tag>
                    </template>
                  </van-cell>
                  <van-cell
                    title="联系人"
                    value="张主任"
                  />
                  <van-cell
                    title="电话"
                    value="18655552222"
                  />
                  <van-cell title="审报产品">
                    <template #default>
                      <van-tag type="primary">查看</van-tag>
                    </template>
                  </van-cell>
                  <van-cell
                    title="产业政策"
                    value="是"
                  />
                  <van-cell
                    title="发证类型"
                    value=""
                  />
                </van-cell-group>
              </template>
            </van-tab>
            <van-tab title="评审组">
              <template>
                <van-cell-group class="mt10">
                  <van-cell
                    title="姓名"
                    value="高新"
                  />
                  <van-cell
                    title="性别"
                    value="男"
                  />
                  <van-cell
                    title="组长"
                    value="是"
                  />
                  <van-cell
                    title="实习"
                    value="是"
                  />
                  <van-cell title="职责">
                    <template #default>
                      <van-checkbox-group
                        v-model="result"
                        direction="horizontal"
                      >
                        <van-checkbox name="0">管理</van-checkbox>
                        <van-checkbox name="1">工艺</van-checkbox>
                        <van-checkbox name="2">检验</van-checkbox>
                      </van-checkbox-group>
                    </template>
                  </van-cell>
                  <van-cell
                    title="工作单位"
                    value="山东省化肥总厂"
                  />
                  <van-cell
                    title="手机"
                    value="13788990076"
                  />
                  <van-cell
                    title="电话"
                    value="0531-88765543"
                  />
                  <van-cell
                    title="Email"
                    value="gaoxin@sina.com"
                  />
                  <van-cell
                    title="联系地址"
                    value="济南历山路80号"
                  />
                  <van-cell
                    title="注册号"
                    value="GS-002543"
                  />
                </van-cell-group>
                <van-cell-group class="mt10">
                  <van-cell
                    title="姓名"
                    value="高新"
                  />
                  <van-cell
                    title="性别"
                    value="男"
                  />
                  <van-cell
                    title="组长"
                    value="是"
                  />
                  <van-cell
                    title="实习"
                    value="是"
                  />
                  <van-cell title="职责">
                    <template #default>
                      <van-checkbox-group
                        v-model="result"
                        direction="horizontal"
                      >
                        <van-checkbox name="0">管理</van-checkbox>
                        <van-checkbox name="1">工艺</van-checkbox>
                        <van-checkbox name="2">检验</van-checkbox>
                      </van-checkbox-group>
                    </template>
                  </van-cell>
                  <van-cell
                    title="工作单位"
                    value="山东省化肥总厂"
                  />
                  <van-cell
                    title="手机"
                    value="13788990076"
                  />
                  <van-cell
                    title="电话"
                    value="0531-88765543"
                  />
                  <van-cell
                    title="Email"
                    value="gaoxin@sina.com"
                  />
                  <van-cell
                    title="联系地址"
                    value="济南历山路80号"
                  />
                  <van-cell
                    title="注册号"
                    value="GS-002543"
                  />
                </van-cell-group>
              </template>
            </van-tab>
          </van-tabs>
        </div>

      </van-tab>
      <van-tab title="评审结论">评审结论</van-tab>
      <van-tab title="不合格项汇总">不合格项汇总</van-tab>
      <van-tab title="评审材料列表">评审材料列表</van-tab>
    </van-tabs>

    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="friends-o">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import Vue from "vue";
import PHeader from "../../components/PHeader.vue";
import platformList from "../platform/common/platformList";
import {
  Tab,
  Tabs,
  Cell,
  CellGroup,
  Tag,
  Tabbar,
  TabbarItem,
  Checkbox,
  CheckboxGroup,
} from "vant";

Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Tag);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
export default {
  data() {
    return {
      active: 0,
      result: ["0", "2"],
    };
  },
  components: { PHeader, platformList },
};
</script>
<style>
.whiteBg {
  width: 100%;

  margin-top: 0.1rem;
  padding: 0.1rem 0;
}
/* 重写checkBox样式 */
.van-checkbox--horizontal {
  margin-right: 0.1rem;
}
.van-checkbox__label {
  margin-left: 0.03rem;
}
</style>