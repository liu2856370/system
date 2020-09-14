<template>
  <div class="index">
    <PHeader :showArrow="true">信息公示查询</PHeader>
    <van-search v-model="value" shape="round" placeholder="请输入单位名称" />
    <van-tabs v-model="active" sticky>
      <van-tab title="过程信息">
        <van-cell :title="processTotal" value="筛选" />
        <platform-list :list="processList">
          <template #fixed="{slotProps}">
            <van-row class="org-info">
              <van-col span="14" class="org-name" @click="goVerificationInfo(slotProps)">{{slotProps.orgname}}</van-col>
              <van-col span="10" class="org-tags">
                <van-tag plain round type="primary" size="large" class="mr10">{{slotProps.flag|dictFormatter("businessType")}}</van-tag>
                <van-tag plain round type="primary" size="large">{{slotProps.applydescription}}</van-tag>
              </van-col>
            </van-row>
            <van-cell title="产品类别" :value="slotProps.prodtype" />
            <van-cell title="审批事项" :value="slotProps.itemName" />
          </template>
          <template #variable="{slotProps}">
            <van-cell title="所在地区" :value="slotProps.region" />
            <van-cell title="营业执照注册号" :value="slotProps.busliceno" />
            <van-cell title="组织机构代码" :value="slotProps.organno" />
          </template>
        </platform-list>
      </van-tab>
      <van-tab title="证书信息">
        <van-cell :title="certificateTotal" value="" />
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <van-radio-group v-model="radio" v-for="(item,index) in certificateCompanyList" :key="index" class="mt10">
          <van-cell-group>
            <van-radio :name="index" :index="index" @click="saveData(item)">
                <template #default>
                  <span>{{item}}</span>
                </template>
             
            </van-radio>
          </van-cell-group>
          </van-radio-group>
        </van-list>
        <van-button type="primary" size="large" @click="goQualifications">下一步</van-button>
        <van-notice-bar color="#1989fa" background="#ecf9ff" left-icon="info-o" >证书如需邮寄送达，请于当地业务窗口联系告知邮寄地址、收件人等信息，便于邮寄</van-notice-bar>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import PHeader from "../../components/PHeader.vue";
import platformList from "../common/platformList";
export default {
  name: "index",
  components: {
    platformList,
    PHeader
  },
  data() {
    return {
      radio: 0,
      processTotal: "",
      certificateTotal: "",
      active: 0,
      value: "",
      finished: true,
      loading: false,
      itemData: "",
      processList: [],
      certificateList:{},
      certificateCompanyList:[]
    };
  },
  methods:{
    onLoad(){},
    saveData(item){
      this.itemData = item;
    },
    goQualificationsList(value){
      client.saveStorage("certificateList", this.certificateList[value]);
      this.$router.push("/qualifications");
    },
    goQualifications(){
      client.saveStorage("certificateList", this.certificateList[this.itemData]);
      this.$router.push("/qualifications");
    },
    goVerificationInfo(itemData){
      client.saveStorage("companyProcessInfo", itemData);
      if(itemData.applydescription === "发证"){
        this.$router.push("/certification-check");
      }
      else if(itemData.applydescription === "变更"){
        this.$router.push("/change-check");
      }
      else if(itemData.applydescription === "换证"){
        this.$router.push("/replace-check");
      }

      // //受理中计划中
      // if(20000<=itemData.state&&itemData.state<50000){
      //   this.$router.push("/replace-check");
      // }
      // //审查中、许可中、已发证、不予许可
      // else if((50000<=itemData.state&&itemData.state<=80000) || (parseInt(itemData.state) === 10700)){
      //   this.$router.push("/certification-check");
      // }
    }
  },
  created(){
      client.rpc("/xxgs/findGcxx",{"itemId": client.loadStorage("approvalInfo").code}).then(res=>{
        this.processTotal = "共" + res.list.length + "条";
        this.processList = res.list;
      });

    client.rpc("/xxgs/gy/findZsList").then(res=>{
      if(res.list && res.list.length){
        let certificateList = {};
        let certificateCompanyList = [];
        for(let i=0;i<res.list.length;i++){
          let item = res.list[i];

          if(!this.itemData) this.itemData = item.xksx;
          item.unfold = true;
          if(certificateCompanyList.indexOf(item.xksx) === -1){
            certificateCompanyList.push(item.xksx);
          }

          if(certificateList[item.xksx]){
            certificateList[item.xksx].push(item);
          }
          else{
            certificateList[item.xksx] = [item];
          }
        }

        this.certificateList = certificateList;
        this.certificateCompanyList = certificateCompanyList;
      }

      this.certificateTotal = "共" + this.certificateCompanyList.length + "条";
    });
  }
};
</script>

<style lang="less" scoped>
.van-radio,
.van-button,
.van-notice-bar{
  padding: 10px 16px;
}

.van-radio{
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
    color: #1989fa;
  }
  .org-tags {
    text-align: right;
  }
}
</style>