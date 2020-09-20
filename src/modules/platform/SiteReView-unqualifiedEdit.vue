<template>
  <div>
    <PHeader :showArrow="true">新增</PHeader>
    <van-form @submit="onSubmit">
      <van-cell-group class="mt10">
        <van-field
          readonly
          clickable
          label="不符合条款"
          :value="unquas"
          name="unquas"
          placeholder="请选择不符合条款"
          @click="showPicker1 = true"
          right-icon="arrow-down"
          class="van-cellForSelect"
          center
        />
        <van-popup
          v-model="showPicker1"
          round
          position="bottom"
          get-container="body"
        >
          <van-picker
            show-toolbar
            :columns="unquasList"
            value-key="code"
            @cancel="showPicker1 = false"
            @confirm="onConfirm1"
          />
        </van-popup>

        <van-field
          readonly
          clickable
          label="核查项目"
          :value="hcitems"
          name="hcitems"
          placeholder="请选择核查项目"
          @click="showPicker2 = true"
          right-icon="arrow-down"
          class="van-cellForSelect"
          center
        />
        <van-popup
          v-model="showPicker2"
          round
          position="bottom"
          get-container="body"
        >
          <van-picker
            show-toolbar
            :columns="hcitemsList"
            value-key="caption"
            @cancel="showPicker2 = false"
            @confirm="onConfirm2"
          />
        </van-popup>
        <van-field
          v-model="frequency"
          name="frequency"
          label="频次"
          placeholder="请您输入频次"
        />
        <div class="feildCell-autoWidth">
          <label>改进意见</label>
          <div>
            <van-radio-group
              v-model="degree"
              name="degree"
              direction="horizontal"
            >
              <van-radio name="2">建议改进</van-radio>
              <van-radio name="0">不符合</van-radio>
            </van-radio-group>
          </div>
        </div>
        <van-field
          v-model="description"
          name="description"
          rows="3"
          autosize
          label="缺陷事实描述"
          type="textarea"
          placeholder="请您输入缺陷事实描述"
        />
        <van-field
          v-model="claim"
          name="claim"
          rows="3"
          autosize
          label="整改要求"
          type="textarea"
          placeholder="请您输入整改要求"
        />
      </van-cell-group>

      <div class="btnGroup">
        <van-button
          round
          plain
          type="info"
          native-type="button"
          @click="goBack"
        >取消</van-button>
        <van-button
          round
          type="info"
          native-type="submit"
          class="ml10"
        >提交</van-button>
      </div>
    </van-form>
    <van-tabbar v-model="tabBarActive">
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
  Form,
  Dialog,
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
Vue.use(Form);
Vue.use(Dialog);
export default {
  data() {
    return {
      findPlanInfo: client.loadSessionStorage("findPlanInfo"),
      unitInfo: client.loadSessionStorage("unitInfo"),
      unqualifiedInfo: client.loadSessionStorage("unqualifiedInfo"),
      unqualifiedType: client.loadSessionStorage("unqualifiedType"),
      tabBarActive: 1,
      showPicker1: false,
      showPicker2: false,
      frequency: "",
      degree: 2,
      description: "",
      claim: "",
      unquas: "",
      hcitems: "",
      unquasList: [],
      hcitemsList: [],
    };
  },
  components: { PHeader },
  created() {
    this.getHcxmList();
  },
  methods: {
    //获取核查项目列表
    getHcxmList: function () {
      var self = this;
      client.rpc("/sc/gy/findSelItems").then((res) => {
        console.info(res);
        self.unquasList = res.unquas;
        self.hcitemsList = res.hcitems;
        if (self.unqualifiedType == "edit") {
          self.claim = self.unqualifiedInfo.claim;
          self.degree = self.unqualifiedInfo.degree;
          self.description = self.unqualifiedInfo.description;
          self.frequency = self.unqualifiedInfo.frequency;
          self.unquas = self.unqualifiedInfo.itemcode;
          self.hcitems = self.unqualifiedInfo.hcitems;
          self.unquasId = self.getUnquas(self.unquas);
          self.hcitemscode = self.getHcitems(self.hcitems);
        }
      });
    },
    onConfirm1(value) {
      this.unquas = value.code;
      this.unquasId = value.id;
      this.showPicker1 = false;
    },
    onConfirm2(value) {
      this.hcitems = value.caption;
      this.hcitemscode = value.code;
      this.showPicker2 = false;
    },
    goBack() {
      this.$router.go(-1);
    },
    onSubmit(values) {
      var self = this;
      console.log("submit", values);
      debugger;
      client
        .rpc("/sc/gy/saveOrUpdBhgx", {
          produnitid: this.unitInfo.id, //产品单元主键
          neaid: this.findPlanInfo.id, //'过程Id'
          frequency: this.frequency, //	是	频次
          itemid: this.unquasId, //条款号ID
          itemcode: this.unquas, //否	不符合条款号
          degree: this.degree, //是	改进建议
          description: this.description, //缺陷事实描述
          claim: this.claim, //整改要求
          hcitemscode: this.hcitemscode, //核查项目编代号
        })
        .then(function (res) {
          if (self.unqualifiedType == "edit") {
            Dialog.alert({
              message: "修改成功",
            }).then(() => {
              self.$router.go(-1);
            });
          } else {
            Dialog.alert({
              message: "添加成功",
            }).then(() => {
              self.$router.go(-1);
            });
          }
        });
    },
    getUnquas(val) {
      for (let i = 0; i < this.unquasList.length; i++) {
        if (this.unquasList[i].code == val) {
          return this.unquasList[i].id;
        }
      }
    },
    getHcitems(val) {
      for (let i = 0; i < this.hcitemsList.length; i++) {
        if (this.hcitemsList[i].caption == val) {
          return this.hcitemsList[i].code;
        }
      }
    },
  },
};
</script>
<style scoped>
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
.btnGroup {
  padding: 0.2rem 0;
  text-align: center;
}
.btnGroup button {
  width: 40%;
}
</style>