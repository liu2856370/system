<template>
    <div>
        <PHeader :showArrow="true" @leftClick="onClickLeft">
            <template #default>原材料外购件、外协议</template>
        </PHeader>
        <div style="margin-top: 0.1rem;">
             <template >
                    <van-cell title="产品单元" value="复核肥料" />
                    <van-cell title="名称" value="" />
                    <van-cell title="关键零部件结构形式" value="复肥" />
                    <van-cell title="执行标准" value="" />
                    <van-cell title="技术要求" value="合格" />
                    <van-cell title="生产单位" value="" />
                    <van-cell title="生产方式" value="" />
                </template>
        </div>
    </div>
</template>
<script>
import PHeader from "../../components/PHeader.vue";
export default {
    name: "adminAgreement",
    data(){
        return {};
    },
    components: {
    PHeader,
  },
}
</script>