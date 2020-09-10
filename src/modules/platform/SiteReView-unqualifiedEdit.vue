<template>
  <div>
    <PHeader :showArrow="true">新增</PHeader>
    <van-cell-group class="mt10">
      <van-cell
        title="不符合条款"
        value="2.1"
      />
      <van-field
        readonly
        clickable
        label="核查项目"
        :value="value"
        placeholder="请选择核查项目"
        @click="showPicker = true"
        right-icon="arrow-down"
        class="van-cellForSelect"
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
      <van-field
        v-model="nums"
        label="频次"
        placeholder="请您输入频次"
      />
      <div class="feildCell-autoWidth">
        <label>改进意见</label>
        <div>
          <van-radio-group
            v-model="radio"
            direction="horizontal"
          >
            <van-radio name="yes">建议改进</van-radio>
            <van-radio name="no">不符合</van-radio>
          </van-radio-group>
        </div>
      </div>
      <van-field
        v-model="msg1"
        rows="3"
        autosize
        label="缺陷事实描述"
        type="textarea"
        placeholder="请您输入缺陷事实描述"
      />
      <van-field
        v-model="msg2"
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
        native-type="submit"
        @click="goBack"
      >取消</van-button>
      <van-button
        round
        type="info"
        native-type="submit"
        class="ml10"
        @click="addNewItem"
      >提交</van-button>
    </div>

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
      active: 1,
      value: "",
      showPicker: false,
      nums: "",
      radio: "yes",
      msg1: "",
      msg2: "",
      columns: [
        "设备工装设备(生产设备)",
        "技术工艺文件",
        "技术人员",
        "产品标准",
        "相关标准",
        "标准实施",
      ],
    };
  },
  components: { PHeader },
  methods: {
    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    },
    goBack() {
      this.$router.go(-1);
    },
    addNewItem() {
      this.$router.go(-1);
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