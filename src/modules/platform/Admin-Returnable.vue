<template>
    <div>
        <PHeader :showArrow="true" @leftClick="onClickLeft">
            <template #default>材料退回</template>
        </PHeader>
        <template style="margin-top: 0.1rem;">
            <van-cell title="退回时间" value="2020-05-26"/>
            <van-cell title="备注">
              <template #right-icon>
                <van-tag plain round type="primary" @click="queryBasisList">查看</van-tag>
              </template>
            </van-cell>
        </template>
    </div>
</template>
<script>
import PHeader from "../../components/PHeader.vue";
export default {
    name: "adminReturnable",
    data(){
        return {};
    },
    components: {
    PHeader,
  },
}
</script>