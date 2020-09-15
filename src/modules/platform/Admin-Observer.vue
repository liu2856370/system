<template>
  <div>
      <PHeader :showArrow="true">
            <template #default>观察员报告</template>
      </PHeader>  
        <template>
          <div style="margin-top: 0.1rem;">
            <van-cell title="观察员" value="李冬冬" />
            <van-cell title="性别" value="男" />
            <van-cell title="手机" value="" />
            <van-cell title="电话" value="" />
            <van-cell title="邮箱" value="" />
            <van-cell title="观察时间" value="" />
            <van-cell title="上传附件" value="" />
            <van-cell title="观察员意见" value="" />
            <van-cell title="观察信息上报时间" value="" />
          </div>
        </template>
  </div>
</template>
<script>
import PHeader from "../../components/PHeader.vue";
export default {
    name: "administrationObserver",
    data(){
        return{
          companyData:{}
        };
    },
    components: {
    PHeader,
  },
  methods:{
  }
};
</script>