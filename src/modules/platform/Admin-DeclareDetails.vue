<template>
    <div>
        <PHeader :showArrow="true">
            <template #default>详情</template>
        </PHeader>
        <platform-list :list="list1" :show="false">
        <template>
            <div class="mt10">
                <van-cell title="产品单元" value="aaa"/>
                <van-cell title="是否免于发证检验" value="bbb"/>
                <van-cell title="本次是否申报" value="bbb"/>
            </div>
        </template>

        </platform-list>
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
        };
    },
    created(){
        let detailsID = client.loadSessionStorage("detailsID");
         client.rpc("/qy/getThInfo", {"id": detailsID}).then(res=>{
            this.companyData = res;
        });
    }
}
</script>