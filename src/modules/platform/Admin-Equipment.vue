<template>
    <div>
        <PHeader :showArrow="true" @leftClick="onClickLeft">
            <template #default>生产设备-工艺装备</template>
        </PHeader>
        <div style="margin-top: 0.1rem;">
             <template >
                    <van-cell title="产品单元" value="复核肥料" />
                    <van-cell title="设备名称" value="" />
                    <van-cell title="规格型号" value="复肥" />
                    <van-cell title="数量(台/套)" value="100000(万元)" />
                    <van-cell title="完好状态" value="合格" />
                    <van-cell title="使用场所" value="住商肥料(青岛)有限公司" />
                    <van-cell title="生产厂及国别" value="青岛市平度市" />
                    <van-cell title="生产日期" value="252600" />
                    <van-cell title="购置日期" value="" />
                    <van-cell title="通用" value="" />
                    <van-cell title="备注" value="" />
                    <van-cell title="设备编号" value="" />
                    <van-cell title="是否关键设备" value="" />
                    <van-cell title="其他" value="" />
                </template>
        </div>
    </div>
</template>
<script>
import PHeader from "../../components/PHeader.vue";
export default {
    name: "adminEquipment",
    data(){
        return {};
    },
    components: {
    PHeader,
  },
}
</script>