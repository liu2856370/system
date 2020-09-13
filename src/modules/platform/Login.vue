<template>
  <div class="platform-login">
    <div class="govTitle">山东市场监管行政许可管理系统</div>
    <div class="loginPanel">
      <van-tabs
        v-model="usertype"
        type="card"
        background="#fff"
        animated
        swipeable
        @click="onClick"
      >
        <van-tab>
          <div slot="title">企业审报</div>
          <div class="tabContent">
            <!-- <van-field
              readonly
              clickable
              clearable
              :value="value"
              placeholder="请选择机构类型"
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
            </van-popup> -->

            <van-field
              v-model="loginId1"
              placeholder="请输入社会信用代码第9位至17位"
            />

            <van-field
              v-model="password1"
              :type="passwordType"
              :right-icon="passwordRightIcon"
              placeholder="请输入密码"
              @click-right-icon="passwordClick"
            />

            <van-field
              v-model="captcha"
              center
              maxlength="4"
              placeholder="验证码"
            >
              <div slot="button">
                <van-image
                  fit="contain"
                  @click="getVerifyCode"
                  :src="vImg"
                />
              </div>
            </van-field>

            <van-button
              round
              size="large"
              type="info"
              class="mt30"
              @click="goCompanyDeclare"
            >登录</van-button>
            <div class="aLink">密码重置申请</div>
          </div>
        </van-tab>

        <van-tab title="现场审查">
          <div slot="title">现场审查</div>
          <div class="tabContent">
            <van-field
              v-model="loginId2"
              placeholder="审查员登录账号"
            />

            <van-field
              v-model="password2"
              :type="passwordType"
              :right-icon="passwordRightIcon"
              placeholder="请输入密码"
              @click-right-icon="passwordClick"
            />

            <van-field
              v-model="captcha"
              center
              maxlength="4"
              placeholder="验证码"
            >
              <div slot="button">
                <van-image
                  fit="contain"
                  @click="getVerifyCode"
                  :src="vImg"
                />
              </div>
            </van-field>

            <van-button
              round
              size="large"
              type="info"
              class="mt30"
              @click="goSiteReView"
            >登录</van-button>
            <div class="aLink">密码重置申请</div>
          </div>
        </van-tab>
        <van-tab title="行政审批">
          <div slot="title">行政审批</div>
          <div class="tabContent">
            <van-field
              v-model="loginId3"
              placeholder="请输入用户名"
            />

            <van-field
              v-model="password3"
              :type="passwordType"
              :right-icon="passwordRightIcon"
              placeholder="请输入密码"
              @click-right-icon="passwordClick"
            />

            <van-field
              v-model="captcha"
              center
              maxlength="4"
              placeholder="验证码"
            >
              <div slot="button">
                <van-image
                  fit="contain"
                  @click="getVerifyCode"
                  :src="vImg"
                />
              </div>
            </van-field>

            <van-button
              round
              size="large"
              type="info"
              class="mt30"
              @click="goAdministrationView"
            >登录</van-button>
            <div class="aLink">密码重置申请</div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Tab, Tabs, Picker, Field, Popup, Button } from "vant";
import { Image as VanImage } from "vant";

Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Picker);
Vue.use(Field);
Vue.use(Popup);
Vue.use(VanImage);
Vue.use(Button);

export default {
  data() {
    return {
      loginId1: "740208528",
      loginId2: "jinpeizhi",
      loginId3: "",
      password1: "740208528",
      password2: "aaaaa",
      password3: "",
      usertype: 0, //登陆类型
      passwordType: "password",
      passwordRightIcon: "closed-eye",
      captcha: "", //图形验证码
      openId: this.getTimes(),
      showPicker: false,
      vImg:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAAAaCAYAAAAOl/o1AAAABHNCSVQICAgIfAhkiAAABFJJREFUWEftmF1oW2UYx//Pe5bm0CSnfrAl60mCF4qC3TqQwQRhygZ+bnWzoLDhF7vxYupYQocXInjTkeyiCDKQgp1TFFldJ4KgEwoWp6JQFFEmXjRpl1CY5DRpc5qd88h72gNnXZeeJAVvTu6S87zP876//J//8yaE4HUTAQp43EwgALJGEQGQAEhzkwgUEijEh0LmwbF61HgFoMMA9q4uGWdbGU4vRn7erElkJpM7GZgGcFEtFg/5zZuKLvSRYv+2XrzN2FM0en70m0st5c+D+SkQ3Qnmfxn0mbk985q73mmZQtS4AOAwMV62WfkGgE7Cykk4BNqXrMa+81uwWVw9mfwCwLPtAmGbBsD0j7dGAyiXqrF5P/tzYABHAHxsEeUU5qx8z8AlM5EZkDkcIDPdtd2ApacXtYtuYvkZCesnMEZTNe2Yn4LNYkxdH2Siz5l5iojm21FIq2pYux/1Wu46EwpmItvvPguX8hMEHLSIdjXiJ6ebmmohajCAyVRVe7QTIByPR8xQaBrME0R0BwN3tQQkZhwkwROdAFFLefmlfsCMs94WCZdyBwh0SaqmnsgcvS2QFV9ZMACMp6rac50Aqev6GRANYHn5cerqeqtVIEmtckQQzrMldhSqsd/b2UvXtdyQIBoG8el6PHvKm2NFOfSrmcjsvy2QYsR4iQkfSl9J1rSxdjYh13iM9E21WBwxk8nRdoGYFS1aBtXa2UszIOFS/iqBu+uJrH4LkJnuWi+JG4MAjUj/UGuxE1tBC+1sQq5Z0vXvpWeEG42jVC7XOgECxlcgPC3zMuMcA++3OGGkBVypJzIPu+eRrcTM7xHh+i1A3GnjGbvH04uRubZh9Pa+SkKMKrb9SGhubmpVMS0rRI5dED8Bpq9lyySiC1tDws4T4UXrhrJ/tha97GePain/A4A9rl9I1RDwjjNd1gMiH0jvMKPV3Qx+W45d0cADuqn95aegN4a3bYubXV1T0kjV2dmT7rN2FLJe7Tg4Eu6pTIKpNGP0PONnf6HymX6F+Swz7yIiFeA5ED5iJscjzUTmvqamuhRZuCoZpWvaDj8FvTFLq+rYYJ3jK63mduPTWmUEhNc78RaZSy3lmYHLTU1VBrotpFZjWic+4j3wZilE5kxplTEiftCs9Oxt12zVcm4YTEM286nl7dnTjkLkRAnXYuPeQ8vWkQohwp9qNXbg/wIiWyOkGX1rzdO9zjPj3YLRI9t7w5e8c5iJ7JfeQGfCMN9tCfGYczGbDRv3W1swKYMEMGSz8ocQdsxmHiFCH9s45L3Bblh1g4BWFaJHqvuULda3cqrYlnJOEJdZ2P2C+IQstWwpT/q9urvjVfqGXCu9g4B7XXU45uoa6VJ39Q0QPy8hOGdijBLRJ5v1O6YTU02oS/eEQo1BEvYLAD0E8C9si08bTGN+Yax6xTEGHyfQzpUj4m8ivuC9qAX/h6xRdAAkANLc5AKFBApprpD/AMR4GTmcpMJ8AAAAAElFTkSuQmCC",
      columns: [
        "工业产品生产许可证获证单位",
        "计量器具型式批准许可证获证单位",
        "计量标准器具核准许可证获证单位",
        "特种设备设计许可证获证单位",
        "特种设备制造许可证获证单位",
        "气瓶充装许可证获证单位",
      ],
    };
  },
  created: function () {
    this.getVerifyCode(); //初始化图形验证码
  },
  methods: {
    goCompanyDeclare() {
      //企业审报登陆
      client
        .rpc('/login',{
          loginId:this.loginId1,
          password:this.password1,
          openId:this.openId,
          usertype:this.usertype+1,
          captcha:this.captcha
        })
        .then((res) => {
          client.saveSessionStorage("logonInfoToken",res.token);
          this.$router.push("/platform");
        });
    },
    goSiteReView() {
      //现场审批登陆
      client
        .rpc('/login',{
          loginId:this.loginId2,
          password:this.password2,
          openId:this.openId,
          usertype:this.usertype+1,
          captcha:this.captcha
        })
        .then((res) => {
          client.saveSessionStorage("logonInfoToken",res.token);
          this.$router.push("./site-reView");
        });
    },
    goAdministrationView() {
      //行政审批登陆
      client
        .rpc('/login',{
          loginId:this.loginId3,
          password:this.password3,
          openId:this.openId,
          usertype:this.usertype+1,
          captcha:this.captcha
        })
        .then((res) => {
          client.saveSessionStorage("logonInfoToken",res.token);
          this.$router.push("./admin-ListView");
        });
    },
    // onConfirm(value) {
    //   this.value = value;
    //   this.showPicker = false;
    // },
    onClick() {
      this.getVerifyCode();
      this.captcha = "";
    },
    getTimes() {
      return new Date().getTime();
    },
    getVerifyCode() {
      console.info("刷新图形验证码");
      client.rpc("/login/getCaptcha",{
        openId:this.openId
      }).then((res) => {
        this.vImg = "data:image/png;base64," + res;
      });
    },
    passwordClick(item) {
      if (item.target.className.indexOf("van-icon-closed-eye") > -1) {
        this.passwordRightIcon = "eye-o";
        this.passwordType = "type";
      } else {
        this.passwordRightIcon = "closed-eye";
        this.passwordType = "password";
      }
    },
  },
};
</script>
<style scoped>
.govTitle {
  margin-top: 0.76rem;
  width: 100%;
  font-size: 0.2rem;
  font-weight: bold;
  color: #000;
}
.govTitle::before {
  display: block;
  content: "";
  width: 0.95rem;
  height: 1.03rem;
  background: url("../../assets/home/icon-markeyManager.png") no-repeat center;
  background-size: 100% 100%;
  margin-left: 1.6rem;
  margin-bottom: 0.15rem;
}

/* 登录选项卡 */
.loginPanel {
  width: 2.8rem;
  margin: 0 auto;
  margin-top: 0.3rem;
}

.tabContent {
  margin-top: 0.2rem;
}
.aLink {
  font-size: 0.14rem;
  text-decoration: underline;
  color: #1677ff;
  margin-top: 0.24rem;
}
</style>
<style lang="less">
.platform-login {
  text-align: center;
  overflow: hidden;
  height: 100%;
  background-color: #fff;
  /* 重写tab样式 */
  .van-tabs--card > .van-tabs__wrap {
    height: 0.5rem;
  }
  .van-tabs__nav--card {
    border: none;
    border-bottom: #1677ff 1px solid !important;
    margin: 0;
    height: 0.5rem;
  }
  .van-tabs__nav--card .van-tab {
    line-height: 0.5rem !important;
    font-size: 0.2rem !important;
    color: #8d8d8d;
    border: none;
  }
  .van-tabs__nav--card .van-tab.van-tab--active {
    background: #fff;
    color: #1677ff;
  }
  .van-tabs__nav--card .van-tab.van-tab--active::after {
    display: block;
    content: "";
    position: absolute;
    width: 0.21rem;
    height: 0.11rem;
    background: url("../../assets/platform/icon-arrowForTab.png") no-repeat
      center;
    background-size: 100% 100%;
    bottom: -1px;
  }
  .van-cellForSelect,
  .van-cell {
    padding: 0 0.08rem;
    height: 0.5rem;
    line-height: 0.5rem;
    border: none;
    border-bottom: #cccccc 1px solid;

    font-size: 0.18rem;
  }
  .van-cellForSelect {
    border: #cccccc 1px solid;
  }
  .van-image {
    width: 1rem;
    height: 0.25rem;
    padding: 0.05rem;
    margin-top: 0.2rem;
    border: #bfbfbf 0.01rem solid;
    border-radius: 0.4rem;
  }
  .van-image img {
    width: 100%;
    height: 100%;
  }
  .van-button--round {
    border-radius: 0.1rem;
  }
  .van-button--large {
    width: 98%;
    height: 0.4rem;
  }
}
</style>