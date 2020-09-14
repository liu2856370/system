<template>
  <div>
       <PHeader :showArrow="true">{{companyData.orgname}}</PHeader>
        <template>
            <van-cell title="单位名称" :value="companyData.orgname" />
            <van-cell title="产品名称" :value="companyData.prodname" />
            <van-cell title="住所" :value="companyData.addr" />
            <van-cell title="生产住址" :value="companyData.prodaddr" />
            <van-cell title="营业执照注册号" :value="companyData.busliceno" />
            <van-cell title="证书编号" :value="companyData.certno" />
            <van-cell title="有效期至" :value="companyData.enddate" />
            <van-cell title="发证日期" :value="companyData.startdate" />
            <van-cell title="许可范围" :value="companyData.xkfw" />
          </template>
  </div>
</template>

<script>
import PHeader from "../../components/PHeader.vue";
export default {
    name: "infoQuery",
    components:{
        PHeader
    },
    data(){
        return {
            companyData:{}
        };
    },
    created(){
        let companyId = client.loadStorage("companyId");
        client.rpc("/xxgs/gy/getZsxx", {"id": companyId}).then(res=>{
            this.companyData = res;
        });
    }
}
</script>

<style>

</style>