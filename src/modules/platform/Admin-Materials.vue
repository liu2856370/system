<template>
    <div>
        <PHeader :showArrow="true" @leftClick="onClickLeft">
            <template #default>申请材料</template>
        </PHeader>
        <platform-list :list="list1">
          <template #fixed="{slotProps}">
            <van-cell title="附件名称" value="全国工业产品许可申请书" />
            <van-cell title="已上传文件" value="" />
            <van-cell title="检查去人文件" value="" />
          </template>
        </platform-list>
    </div>
</template>
<script>
import PHeader from "../../components/PHeader.vue";
import platformList from "../platform/common/platformList";
export default {
    data(){
        return {
            active: 0,
            list1: [{ orgname: "山东群英电气有限公司1" },
            { orgname: "山东群英电气有限公司2" },
            { orgname: "山东群英电气有限公司3" }]
        };
    },
    components: {
        PHeader,
        platformList
    },
}
</script>