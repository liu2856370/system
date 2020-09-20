<template>
    <div>
        <PHeader :showArrow="true">
            <template #default>详情</template>
        </PHeader>
        <platform-list :list="resultList">
        <template #fixed="{slotProps}">
            <div class="mt10">
                <van-cell title="产品单元">
                    <template>
                        <span class="org-name" @click="checkProductVariety(slotProps.id)">{{slotProps.unitname}}</span>
                    </template>
                </van-cell>
                <van-cell title="是否免于发证检验" :value="slotProps.isfreefztest"/>
                <van-cell title="本次是否申报" :value="slotProps.shenbao"/>
            </div>
        </template>
        </platform-list>
    </div>
</template>
<script>
import PHeader from "../../components/PHeader.vue";
import platformList from "../platform/common/platformList";
export default {
    name: "adminReturnReason",
    components: {
        platformList,
        PHeader
    },
    data(){
        return {
            resultList:[]
        };
    },
    created(){
        let detailsID = client.loadSessionStorage("detailsID");
         client.rpc("/qy/gy/sqxmdy", {"sbid": detailsID}).then(res=>{
            this.resultList = res;
            for(let i= 0;i<this.resultList.length;i++){
                if(this.resultList[i].shenbao == "1"){
                    this.resultList[i].shenbao = "不申报"
                }else{
                    this.resultList[i].shenbao = "申报"
                }
                if(this.resultList[i].isfreefztest == "1"){
                    this.resultList[i].isfreefztest = "是"
                }else{
                    this.resultList[i].isfreefztest = "否"
                }
            }
        });
    },
    methods:{
        checkProductVariety(id){
            let detailsID = client.loadSessionStorage("detailsID");
            client.rpc("/qy/gy/sqxmdypz",{"sbid":detailsID,"dyid":id}).then(res=>{
                client.saveSessionStorage("productVarietyData", res);
                this.$router.push("/admin-ProductVarietyView");
            });
        }
    }
}
</script>