<template>
    <div>
        <PHeader :showArrow="true">
            <template #default>补正内容</template>
        </PHeader>
        <template>
            <div class="mt10">
                <van-cell title="补正内容" :value="companyData.noticereason"/>
                <van-cell title="咨询人" :value="companyData.linkman"/>
                <van-cell title="联系电话" :value="companyData.linkmantel"/>
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
        client.rpc("/qy/getBzInfo/", {"id": companyId}).then(res=>{
            this.companyData = res;
        });
    }
}
</script>