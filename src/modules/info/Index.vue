<template>
  <div class="index">
    <PHeader :showArrow="true">信息公示查询</PHeader>
    <van-tabs v-model="active" sticky>
      <van-tab title="过程信息">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad" class="mt10" >
          <van-cell v-for="item in list" :key="item.caption" :title="item.caption" is-link @click="goInfo(item)" />
        </van-list>
      </van-tab>
      <van-tab title="证书信息">
        <van-cell :title="certificateTotal" value="" />
          <van-cell v-for="(item,index) in certificateCompanyList" :key="index" :title="item" is-link @click="goQualifications(item)" />
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
      list: [],
      processList: [],
      certificateList:{},
      certificateCompanyList:[]
    };
  },
  methods:{
    onLoad(){},
    goInfo(item){
      client.saveStorage("approvalInfo", item);
      this.$router.push("/process-info");
    },
    saveData(item){
      this.itemData = item;
    },
    goQualificationsList(value){
      client.saveStorage("certificateList", this.certificateList[value]);
      this.$router.push("/qualifications");
    },
    goQualifications(value){
      client.saveStorage("certificateList", this.certificateList[value]);
      this.$router.push("/qualifications");
    },
    goVerificationInfo(itemData){
    }
  },
  created(){
    client.rpc("/dic/getSpxx").then(res=>{
        this.list = res;
    });

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