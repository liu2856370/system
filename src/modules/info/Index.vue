<template>
  <div class="index">
    <van-search v-model="value" shape="round" placeholder="请输入单位名称" />
    <van-tabs v-model="active" sticky>
      <van-tab title="过程信息">
        <van-cell :title="total" value="筛选" />
        <platform-list :list="list">
          <template #fixed="{slotProps}">
            <van-row class="org-info">
              <van-col span="12" class="org-name" @click="goVerificationInfo(slotProps.index)">{{slotProps.orgname}}</van-col>
              <van-col span="12" class="org-tags">
                <van-tag plain round type="primary" class="mr10">审查中</van-tag>
                <van-tag plain round type="primary">发证</van-tag>
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
        <van-cell :title="total" value="" />
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <van-cell-group v-for="(item,index) in data" :key="index" class="mt10">
            <van-radio :name=index>
              <span @click="goQualificationsList">{{item}}</span>
            </van-radio>
          </van-cell-group>
        </van-list>
        <van-button type="primary" size="large" to="/qualifications">下一步</van-button>
        <van-notice-bar color="#1989fa" background="#ecf9ff" left-icon="info-o" >证书如需邮寄送达，请于当地业务窗口联系告知邮寄地址、收件人等信息，便于邮寄</van-notice-bar>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import platformList from "../common/platformList";
export default {
  name: "index",
  components: {
    platformList
  },
  data() {
    return {
      total: "",
      active: 0,
      value: "",
      finished: true,
      loading: false,
      list: [],
      data:[
        "工业产品生产许可证获证单位",
        "计量器具型式批准许可证获证单位",
        "工业产品生产许可证获证单位",
        "计量器具型式批准许可证获证单位",
        "工业产品生产许可证获证单位",
        "计量器具型式批准许可证获证单位",
        "工业产品生产许可证获证单位",
        "计量器具型式批准许可证获证单位",
        "工业产品生产许可证获证单位",
        "计量器具型式批准许可证获证单位"
      ]
    };
  },
  methods:{
    onLoad(){},
    goQualificationsList(){
      this.$router.push("/qualifications")
    },
    goVerificationInfo(index){
      if(index === 1){
        this.$router.push("/certification-check");
      }
      else if(index === 2){
        this.$router.push("/change-check");
      }
      else{
        this.$router.push("/replace-check");
      }
    }
  },
  created(){
    client.rpc("findGcxx").then(res=>{
      let rspData = res.data;

      this.total = rspData.total;
      this.list = rspData.list;
      console.log(res);
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
  }
  .org-tags {
    text-align: right;
  }
}
</style>