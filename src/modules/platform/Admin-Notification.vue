<template>
    <div>
        <PHeader :showArrow="true" @leftClick="onClickLeft">
            <template #default>受理通知书</template>
        </PHeader>
        <van-image width="1.35rem" height="1.5rem" fit="现场审查技..." src="https://img.yzcdn.cn/vant/cat.jpeg">
            <template #default>
                <div class="mt10" ></div>
                现场审查技...
            </template>
        </van-image>
        <van-image width="1.35rem" height="1.5rem" fit="现场审查技..." src="https://img.yzcdn.cn/vant/cat.jpeg">
            <template #default>
                <div class="mt10" ></div>
                现场审查技...
            </template>
        </van-image>
        <van-image width="1.35rem" height="1.5rem" fit="现场审查技..." src="https://img.yzcdn.cn/vant/cat.jpeg">
            <template #default>
                <div class="mt10" ></div>
                现场审查技...
            </template>
        </van-image>
        
    </div>
</template>
<script>
import PHeader from "../../components/PHeader.vue";
export default {
    data(){
        return{};
    },
    components: {
        PHeader,
    },
}
</script>
<style scoped>

</style>