<template>
  <div>
        <template>
            <van-cell title="单位名称" value="山东群英电气有限公司" />
            <van-cell title="产品名称" value="氯碱" />
            <van-cell title="住所" value="青岛市崂山区峨山镇工业园区工业园路" />
            <van-cell title="生产住址" value="山东省青岛市崂山区峨山镇工业园区工业园路" />
            <van-cell title="营业执照注册号" value="3700000018074687" />
            <van-cell title="证书编号" value="（鲁）XK13-008-00004" />
            <van-cell title="有效期至" value="2021年01月17日" />
            <van-cell title="发证日期" value="2016年01月17日" />
            <van-cell title="许可范围" value="05165415X" />
          </template>
  </div>
</template>

<script>
import infoList from "./common/InfoList";
export default {
    name: "infoQuery",
    data(){
        return {
            
        };
    },
    components:{
        infoList
    }
}
</script>

<style>

</style>