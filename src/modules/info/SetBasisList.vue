<template>
  <div class="index">
    <PHeader :showArrow="true">设定依据</PHeader>
        <platform-list :list="list1">
          <template #fixed="{slotProps}">
            <van-cell title="基本编码" value="370131619000" />
            <van-cell title="依据类别" value="法律" />
            <van-cell title="制定机关" value="全国人民代表大会" />
            <van-cell title="依据名称" value="《工业产品生产许可证管理条例》" />
          </template>
          <template #variable>
            <van-cell title="发布号令（文号）" value="2005年6月国务院令第440号" />
            <van-cell title="具体规定内容" value="第六十八条：“根据需要，省、自治区、直辖市工业产品生产许可证主管部门”" />
            <van-cell title="原文下载地址" value="05165415X" />
            <van-cell title="实施主体" value="山东省市场监督管理局" />
          </template>
        </platform-list>
  </div>
</template>

<script>
import PHeader from "../../components/PHeader.vue";
import platformList from "../common/platformList";
export default {
name: "setBasisList",
  components: {
    platformList,
    PHeader
  },
  data() {
    return {
      active: 0,
      list1: [
        { orgname: "山东群英电气有限公司1" },
        { orgname: "山东群英电气有限公司2" },
        { orgname: "山东群英电气有限公司3" }
      ]
    };
  },
  methods:{
  },
  created(){
    // client.rpc("/qy/getJhtzsInfo",{"id":client.loadStorage("reportId")}).then(res=>{
    //   console.log(res)
    // });
  }
}
</script>

<style>

</style>