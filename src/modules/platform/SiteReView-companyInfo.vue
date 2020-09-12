<template>
  <div>
    <PHeader :showArrow="true">
      山东群英电气有限公司
      <template #right>
        <van-tag
          round
          plain
          size="large"
          type="primary"
          @click="goAdd"
        >新增</van-tag>
      </template>
    </PHeader>
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
              <van-tag
                type="primary"
                size="large"
                @click="showNotice"
              >查看</van-tag>
            </template>
          </van-cell>
        </van-cell-group>

        <van-cell-group class="mt10">
          <van-cell
            title="现场签到"
            value="2020-07-04 12:35:21"
          />
          <van-cell
            title="现场签退"
            center
          >
            <template #right-icon>
              <van-icon
                color="#707070"
                name="location-o"
              />签退打卡
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
                      <van-tag
                        type="primary"
                        size="large"
                        @click="showAddress"
                      >查看</van-tag>
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
                      <van-tag
                        type="primary"
                        size="large"
                        @click="showProduction"
                      >查看</van-tag>
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
      <van-tab title="评审结论">
        <template>
          <van-cell-group class="mt10">
            <van-cell
              title="评审开始时间"
              value="2020-07-04 "
            />
            <van-cell
              title="评审结束时间"
              value="2020-07-04 "
            />
            <van-cell
              title="实际开始时间"
              value="2020-07-04 "
            />
            <van-cell
              title="实际结束时间"
              value="2020-07-04 "
            />
            <van-cell
              title="实地评审记录备用说明"
              value="描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息"
            />
          </van-cell-group>

          <div class="whiteBg">
            <van-tabs type="card">
              <van-tab title="产品评审信息">
                <template>
                  <van-cell-group class="mt10">
                    <van-cell
                      title="产品单元"
                      value="氯碱"
                    />
                    <van-cell
                      title="产品品种明细"
                      value="工业用氢氧化钠"
                    />
                    <van-cell
                      title="规格型号"
                      value="TCH-00321"
                    />
                    <van-cell
                      title="申请类型"
                      value=""
                    />
                    <div class="feildCell-autoWidth">
                      <label>评审结论</label>
                      <div>
                        <van-checkbox-group
                          v-model="result"
                          direction="horizontal"
                        >
                          <van-checkbox name="0">合格</van-checkbox>
                          <van-checkbox name="1">不合格</van-checkbox>
                          <van-checkbox name="2">许可范围变更不审查</van-checkbox>
                        </van-checkbox-group>
                      </div>
                    </div>

                  </van-cell-group>
                </template>
              </van-tab>
              <van-tab title="评审汇总">
                <template>
                  <van-cell-group class="mt10">
                    <van-cell
                      title="产品单元"
                      value="氯碱"
                    />
                    <div class="feildCell-textarea">
                      <p>评审记录</p>
                      否决项： 0项；<br />
                      轻微缺陷项： 5项；<br />
                      不合格项： 0项；<br />
                    </div>
                  </van-cell-group>
                </template>
              </van-tab>
            </van-tabs>
          </div>

        </template>
      </van-tab>
      <van-tab title="不合格项汇总">
        <template>

          <van-field
            readonly
            clickable
            label="请选择单元"
            :value="value"
            placeholder="请选择"
            @click="showPicker = true"
            right-icon="arrow-down"
            center
          />
          <van-popup
            v-model="showPicker"
            round
            position="bottom"
            get-container="body"
          >
            <van-picker
              show-toolbar
              :columns="columns"
              @cancel="showPicker = false"
              @confirm="onConfirm"
            />
          </van-popup>

          <div class="filterCardList">
            <van-cell-group class="mt10">
              <van-cell
                title="不符合条款"
                value="2.1"
              />
              <van-cell
                title="核查项目"
                value="技术工艺文件"
              />
              <van-cell
                title="频次"
                value="1"
              />
              <div class="feildCell-autoWidth">
                <label>改进意见</label>
                <div>
                  <van-radio-group
                    v-model="radio"
                    direction="horizontal"
                    disabled
                  >
                    <van-radio name="yes">建议改进</van-radio>
                    <van-radio name="no">不符合</van-radio>
                  </van-radio-group>
                </div>
              </div>

              <div class="feildCell-textarea">
                <p>缺陷事实描述</p>
                部分技术人员对产品标准中除丙烯含量以外的质量指标要求不熟悉。
              </div>

              <van-cell
                title="整改要求"
                value=""
              />
            </van-cell-group>
            <van-cell-group class="tac pt10 pb10">
              <van-tag
                round
                plain
                size="large"
                type="success"
                @click="goEdit"
              >编辑</van-tag>
              <van-tag
                round
                plain
                class="ml20"
                size="large"
                type="danger"
              >删除</van-tag>
            </van-cell-group>

            <van-cell-group class="mt10">
              <van-cell
                title="不符合条款"
                value="2.1"
              />
              <van-cell
                title="核查项目"
                value="技术工艺文件"
              />
              <van-cell
                title="频次"
                value="1"
              />
              <div class="feildCell-autoWidth">
                <label>改进意见</label>
                <div>
                  <van-radio-group
                    v-model="radio"
                    direction="horizontal"
                    disabled
                  >
                    <van-radio name="yes">建议改进</van-radio>
                    <van-radio name="no">不符合</van-radio>
                  </van-radio-group>
                </div>
              </div>

              <div class="feildCell-textarea">
                <p>缺陷事实描述</p>
                部分技术人员对产品标准中除丙烯含量以外的质量指标要求不熟悉。
              </div>

              <van-cell
                title="整改要求"
                value=""
              />
            </van-cell-group>
            <van-cell-group class="tac pt10 pb10">
              <van-tag
                round
                plain
                size="large"
                type="success"
                @click="goEdit"
              >编辑</van-tag>
              <van-tag
                round
                plain
                class="ml20"
                size="large"
                type="danger"
              >删除</van-tag>
            </van-cell-group>

          </div>

        </template>
      </van-tab>
      <van-tab title="评审材料列表">
        <template>
          <van-cell
            title="现场签到"
            value="2020-07-04 12:35:21"
          />
          <van-cell-group class="mt10">
            <van-cell
              title="规定提交材料"
              value="实地核查办法 *"
              value-class="color-red"
            />
            <van-cell
              title="已提交材料"
              value="22 危化品工业气体核查办法1.zip "
            />
            <van-cell
              title="现场情况"
              center
            >
              <template #right-icon>
                <van-icon class-prefix="icon-camera" />
              </template>
            </van-cell>
          </van-cell-group>
          <van-cell-group class="mt10">
            <van-cell
              title="规定提交材料"
              value="实地核查报告 *"
              value-class="color-red"
            />
            <van-cell
              title="已提交材料"
              value="22 危化品工业气体核查办法1.zip "
            />
            <van-cell
              title="现场情况"
              center
            >
              <template #right-icon>
                <van-icon class-prefix="icon-camear" />
              </template>
            </van-cell>
          </van-cell-group>
          <van-cell-group class="mt10">
            <van-cell
              title="规定提交材料"
              value="实地核查总结 *"
              value-class="color-red"
            />
            <van-cell
              title="已提交材料"
              value="22 危化品工业气体核查办法1.zip "
            />
            <van-cell
              title="现场情况"
              center
            >
              <template #right-icon>
                <van-icon class-prefix="icon-camear" />
              </template>
            </van-cell>
          </van-cell-group>
        </template>
      </van-tab>
    </van-tabs>

    <van-tabbar v-model="active">
      <van-tabbar-item
        icon="home-o"
        to="/site-reView"
      >首页</van-tabbar-item>
      <van-tabbar-item
        icon="user-o"
        to="/siteReView-userCenter"
      >个人中心</van-tabbar-item>
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
  Field,
  Picker,
  Popup,
  RadioGroup,
  Radio,
  Button,
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
Vue.use(Field);
Vue.use(Picker);
Vue.use(Popup);
Vue.use(RadioGroup);
Vue.use(Radio);
Vue.use(Button);
export default {
  data() {
    return {
      active: 0,
      result: ["0", "2"],
      value: "",
      showPicker: false,
      radio: "yes",
      columns: ["单元一", "单元二", "单元三", "单元四", "单元五", "单元六"],
    };
  },
  components: { PHeader, platformList },
  methods: {
    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    },
    onClickRight() {
      console.info("新增");
    },
    goAdd() {
      this.$router.push("/siteReView-unqualifiedEdit");
    },
    goEdit() {
      this.$router.push("/siteReView-unqualifiedEdit");
    },
    showNotice() {
      // 现场核查通知书
      this.$router.push("./goMore-showNotice");
    },
    showAddress() {
      // 生产地址
      this.$router.push("./goMore-showAddress");
    },
    showProduction() {
      // 申报产品
      this.$router.push("./goMore-showProduction");
    },
  },
};
</script>
<style>
.tac {
  text-align: center;
}
.pt10 {
  padding-top: 0.1rem;
}
.pb10 {
  padding-bottom: 0.1rem;
}
.ml20 {
  margin-left: 0.2rem;
}
.color-red {
  color: #ff3b30;
}
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
.feildCell-autoWidth {
  width: 3.82rem;
  margin: 0 0.16rem;
  padding: 0.1rem 0;
  line-height: 0.24rem;
  border-bottom: #f5f5f5 1px solid;
}
.feildCell-autoWidth > label {
  float: left;
}
.feildCell-autoWidth > div {
  float: right;
  text-align: right;
}
.feildCell-autoWidth::after {
  display: block;
  content: "";
  clear: both;
}
.feildCell-textarea {
  width: 3.82rem;
  margin: 0 0.16rem;
  padding: 0.1rem 0;
  line-height: 0.2rem;
  color: #878787;
  border-bottom: #f5f5f5 1px solid;
}
.feildCell-textarea p {
  color: #323232;
  font-size: 0.14rem;
  line-height: 0.25rem;
}
.icon-camera {
  width: 0.24rem;
  height: 0.24rem;
  display: block;
  background: url("../../assets/platform/icon-camera.png") no-repeat center;
  background-size: 100% 100%;
}
</style>