<template>
  <div>
    <PHeader :showArrow="true">
      {{orgname}}
      <template #right>
        <van-tag
          round
          plain
          :class="isShowBtnAdd"
          size="large"
          type="primary"
          @click="goAdd"
        >新增</van-tag>
      </template>
    </PHeader>
    <van-tabs
      v-model="active"
      class="mt10 mb60"
      @click="onClick"
    >
      <van-tab title="评审信息">
        <van-cell-group class="pt10">
          <van-cell
            title="计划标题"
            :value="showPageData.plantitle"
          />
          <van-cell
            title="计划编号"
            :value="showPageData.planno"
          />
          <van-cell
            title="评审开始时间"
            :value="showPageData.plansdate"
          />
          <van-cell
            title="评审结束时间"
            :value="showPageData.planedate"
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
          <van-cell title="现场签到" :value="signTime" />
          <van-cell title="">
            <van-uploader v-model="signList" multiple :after-read="signAfterRead" @delete="signAfterDelete" :max-count="1"/>
          </van-cell>
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

        <van-cell-group
          class="mt10"
          v-for="(item) in showPageData.pszryList"
          v-bind:key="item.certno"
        >
          <van-cell
            title="姓名"
            :value="item.name"
          />
          <van-cell
            title="性别"
            :value="item.sex|dictFormatter('isManOrWoman')"
          />
          <van-cell
            title="组长"
            :value="item.isgroupleader|dictFormatter('isShowYesAndNo')"
          />
          <van-cell
            title="实习"
            :value="item.ispractise|dictFormatter('isShowYesAndNo')"
          />

          <div class="feildCell-autoWidth">
            <label>职责</label>
            <div>
              <van-checkbox-group
                v-model="item.ismanageList"
                direction="horizontal"
                disabled
              >
                <van-checkbox name="管理">管理</van-checkbox>
                <van-checkbox name="工艺">工艺</van-checkbox>
                <van-checkbox name="检验">检验</van-checkbox>
              </van-checkbox-group>
            </div>
          </div>

          <van-cell
            title="工作单位"
            :value="item.orgname"
          />
          <van-cell
            title="手机"
            :value="item.mobileno"
          />
          <van-cell
            title="联系地址"
            :value="item.address"
          />
          <van-cell
            title="注册号"
            :value="item.certno"
          />
        </van-cell-group>

      </van-tab>
      <van-tab title="评审结论">
        <template>
          <van-cell-group class="pt10">
            <van-cell
              title="评审开始时间"
              :value="showPageData2.plansdate"
            />
            <van-cell
              title="评审结束时间"
              :value="showPageData2.planedate"
            />
            <van-cell
              title="实地评审记录备用说明"
              :value="showPageData2.remark"
            />
          </van-cell-group>

          <van-cell-group
            class="mt10"
            v-for="(item) in showPageData2.kindList"
            v-bind:key="item.kid"
          >
            <van-cell
              title="产品单元"
              :value="item.unitname"
            />
            <van-cell
              title="产品品种明细"
              :value="item.kind"
            />
            <van-cell
              title="规格型号"
              :value="item.cellmodel"
            />
            <van-cell
              title="申请类型"
              :value="item.applytype"
            />
            <div class="feildCell-autoWidth">
              <label>评审结论</label>
              <div>
                <van-radio-group
                  v-model="item.ispass"
                  direction="horizontal"
                  @change="change"
                >
                  <van-radio name="0">合格</van-radio>
                  <van-radio name="1">不合格</van-radio>
                  <van-radio name="2">许可范围变更不审查</van-radio>
                </van-radio-group>
              </div>
            </div>

          </van-cell-group>

        </template>
      </van-tab>
      <van-tab title="不合格项">
        <template>
          <van-cell-group class="pt10">
            <van-field
              readonly
              clickable
              label="请选择单元"
              :value="unitId"
              placeholder="请选择"
              @click="showPicker = true"
              right-icon="arrow-down"
              center
            />
          </van-cell-group>
          <van-popup
            v-model="showPicker"
            round
            position="bottom"
            get-container="body"
          >
            <van-picker
              show-toolbar
              :columns="columns"
              value-key="unitname"
              @cancel="showPicker = false"
              @confirm="onConfirm"
            />
          </van-popup>

          <div class="filterCardList">
            <van-cell-group
              class="mt10"
              v-for="(item,index) in showPageData3"
              v-bind:key="item.id"
            >
              <van-cell-group class="mt10">
                <van-cell
                  title="不符合条款"
                  :value="item.itemcode"
                />
                <van-cell
                  title="核查项目"
                  :value="item.hcitems"
                />
                <van-cell
                  title="频次"
                  :value="item.frequency"
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
                  {{item.itemcode}}
                </div>

                <van-cell
                  title="整改要求"
                  :value="item.claim"
                />
              </van-cell-group>
              <van-cell-group class="tac pt10 pb10">
                <van-tag
                  round
                  plain
                  size="large"
                  type="success"
                  :info="JSON.stringify(item)"
                  @click="goEdit(index)"
                >编辑</van-tag>
                <van-tag
                  round
                  plain
                  class="ml20"
                  size="large"
                  :info="JSON.stringify(item)"
                  type="danger"
                >删除</van-tag>
              </van-cell-group>
            </van-cell-group>
          </div>

        </template>
      </van-tab>
      <van-tab title="评审材料">
        <template>

          <van-cell-group
            class="mt10"
            v-for="(item,index) in showPageData4"
            v-bind:key="item.id"
          >
            <van-cell
              title="规定提交材料"
              :value="item.filename"
              value-class="color-red"
            />
            <!-- <van-cell
              title="已提交材料"
              :value="item.uplfilename"
            /> -->
            <van-cell
              title="现场情况"
              center
              @click="getFieldInfo(item)"
            >
            <van-uploader v-model=bindIndex[index] multiple :after-read="afterRead" :max-count="1"/>
            </van-cell>
          </van-cell-group>

        </template>
      </van-tab>
    </van-tabs>

    <van-tabbar v-model="active1">
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
      findPlanInfo: client.loadSessionStorage("findPlanInfo"),
      showPageData: {}, //页签一数据
      showPageData2: {}, //页签二数据
      showPageData3: {}, //页签三数据
      showPageData4: {}, //页签四数据
      active: 0,
      active1: 0,
      result: ["0", "2"],
      unitId: "",
      showPicker: false,
      radio: "yes",
      columns: [],
      orgname: client.loadSessionStorage("findPlanInfo").orgname,
      isShowBtnAdd: "none",
      bindIndex:[],
      fieldInfo:{},
      signList:[],
      signTime:""
    };
  },
  components: { PHeader, platformList },
  created() {
    this.getUnitName();
    this.getCommentInfo();
  },
  methods: {
    onClick(index, title) {
      this.active = index;
      if (index == 0) {
        this.isShowBtnAdd = "none";
        this.getCommentInfo();
      } else if (index == 1) {
        this.isShowBtnAdd = "none";
        this.getCommentCompletion();
      } else if (index == 2) {
        if (this.unitId) {
          this.isShowBtnAdd = "inline-block";
        }
      } else if (index == 3) {
        this.isShowBtnAdd = "none";
        this.getPsclList();
      }
    },
    //获取页签一 评论信息
    getCommentInfo() {
      client
        .rpc("/sc/gy/findPsxx", {
          neaid: this.findPlanInfo.id,
          planid: this.findPlanInfo.planid,
        })
        .then((res) => {
          console.info(res);
          this.showPageData = res;
          for (let i = 0; i < this.showPageData.pszryList.length; i++) {
            var itemData = this.showPageData.pszryList[i];
            itemData.ismanageList = itemData.ismanage.split(",");
          }
        });
    },
    //获取页签二 评论结论
    getCommentCompletion() {
      client
        .rpc("/sc/gy/findPsjl", {
          neaid: this.findPlanInfo.id,
          planid: this.findPlanInfo.planid,
        })
        .then((res) => {
          console.info(res);
          for (let i = 0; i < res.kindList.length; i++) {
            var itemData = res.kindList[i];
            itemData.ispass = itemData.ispass.split(",");
          }
          this.showPageData2 = res;
        });
    },
    //获取产品单元的选项
    getUnitName: function () {
      client
        .rpc("/sc/gy/findBhgxUnit", { neaid: this.findPlanInfo.id })
        .then((res) => {
          console.info(res);
          this.columns = res;
        });
    },
    //不合格 项列表
    getBhgxByUnit: function (unitid) {
      client
        .rpc("/sc/gy/findBhgxByUnit", {
          neaid: this.findPlanInfo.id,
          unitid: unitid,
        })
        .then((res) => {
          console.info(res);
          this.showPageData3 = res;
        });
    },
    //获取 评审材料列表
    getPsclList: function (unitid) {
      let self = this;
      client
        .rpc("/sc/findPscl", {
          neaid: this.findPlanInfo.id,
          planid: this.findPlanInfo.planid,
          type: "MP",
        })
        .then((res) => {
          console.info(res);
          for(let i=0;i<res.length;i++){
            self.bindIndex[i] = [];
          }
          this.showPageData4 = res;
        });
    },
    afterRead(file){
      console.log(file)
      console.log(this.fieldInfo)
      // client
      //   .rpc("/sc/uploadPscl", {
      //     file: file,
      //     neaid: this.findPlanInfo.id,
      //     planid: this.findPlanInfo.planid,
      //     modelid: this.fieldInfo.id
      //   })
      //   .then((res) => {
      //     
      //   });
    },
    getFieldInfo(item){
      this.fieldInfo = item;
    },
    signAfterRead(file){
      this.signTime = "2020-09-20 17:40:48";
    },
    signAfterDelete(){
      this.signTime = "";
    },
    onConfirm(value, index) {
      this.unitId = value.unitname;
      this.isShowBtnAdd = "inline-block";
      client.saveSessionStorage("unitInfo", value);
      this.showPicker = false;
      this.getBhgxByUnit(value.id);
    },
    onClickRight() {
      console.info("新增");
    },
    goAdd() {
      this.$router.push("/siteReView-unqualifiedEdit");
    },
    goEdit(index) {
      debugger;
      client.saveSessionStorage("unqualifiedInfo",this.showPageData3[index]);
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
    change(ind) {
      console.info("评审结论选中的索引：" + ind);
    },
  },
};
</script>
<style scoped>
.tac {
  text-align: center;
}
.van-uploader__upload{
  width:24px;
  height:24px;
}
</style>