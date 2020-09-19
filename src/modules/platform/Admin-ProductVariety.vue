<template>
    <div>
        <PHeader :showArrow="true">
            <template #default>产品品种</template>
        </PHeader>
        <platform-list :list="resultList">
            <template #fixed="{slotProps}">
                <div class="mt10">
                    <van-cell title="产品品种" :value="slotProps.kind"/>
                    <van-cell title="规格型号" :value="slotProps.cellmodel"/>
                    <van-cell title="产品标准" :value="slotProps.cellexecstandard"/>
                    <van-cell title="年设计生产能力" :value="slotProps.designability"/>
                    <van-cell title="申请类别" :value="slotProps.applydescription"/>
                    <van-cell title="是否涉及产业政策" :value="slotProps.ispolicy"/>
                    <van-cell title="涉及产业政策情况" :value="slotProps.policyremark"/>
                    <van-cell title="生产地址" :value="slotProps.addr"/>
                    <van-cell title="是否申报" :value="slotProps.shenbao"/>
                </div>
            </template>
        </platform-list>
    </div>
</template>

<script>
import PHeader from "../../components/PHeader.vue";
import platformList from "../platform/common/platformList";
export default {
    name: "adminProductVariety",
    components: {
        platformList,
        PHeader
    },
    data(){
        return {
            resultList:[],
        };
    },
    created(){
        let productVarietyData = client.loadSessionStorage("productVarietyData");
        this.resultList = productVarietyData;
        for(let i= 0;i<this.resultList.length;i++){
                if(this.resultList[i].ispolicy == "1"){
                    this.resultList[i].ispolicy = "是"
                }else{
                    this.resultList[i].ispolicy = "否"
                }
                if(this.resultList[i].shenbao == "1"){
                    this.resultList[i].shenbao = "不申报"
                }else{
                    this.resultList[i].shenbao = "申报"
                }
            }
    }
}
</script>