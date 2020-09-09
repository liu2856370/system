<template>
    <div>
        <PHeader :showArrow="true" @leftClick="onClickLeft">
            <template #default>检验仪器设备</template>
        </PHeader>
        <div style="margin-top: 0.1rem;">
             <template >
                    <van-cell title="产品单元" value="复核肥料" />
                    <van-cell title="检验项目" value="" />
                    <van-cell title="依据标准及条数" value="复肥" />
                    <van-cell title="检验设备名称" value="" />
                    <van-cell title="数量" value="合格" />
                    <van-cell title="设备规格型号" value="" />
                    <van-cell title="设备编号" value="" />
                    <van-cell title="精度或测量范围" value="" />
                    <van-cell title="用途" value="" />
                </template>
        </div>
    </div>
</template>
<script>
import PHeader from "../../components/PHeader.vue";
export default {
    name: "adminInstrument",
    data(){
        return {};
    },
    components: {
        PHeader,
    },
}
</script>