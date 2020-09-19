<template>
    <div>
        <PHeader :showArrow="true">
            <template #default>退回原因</template>
        </PHeader>
        <template>
            <div class="mt10">
                <van-cell title="申请人名称" :value="companyData.orgname"/>
                <van-cell title="修改意见" :value="companyData.message"/>
            </div>
        </template>
    </div>
</template>
<script>
import PHeader from "../../components/PHeader.vue";
export default {
    name: "adminReturnReason",
    components: {
        PHeader,
    },
    data(){
        return {
            companyData:{}
        };
    },
    created(){
        let companyId = client.loadSessionStorage("notificationID");
        let companyOrgname = client.loadSessionStorage("notificationOrgname");
        client.rpc("/qy/getThInfo", {"id": companyId}).then(res=>{
            this.companyData = res;
            this.companyData={
                orgname:companyOrgname,
            };
        });
    }
}
</script>