<template>
    <div>
        <PHeader :showArrow="true" @leftClick="onClickLeft">
            <template #default>现场审查计划通知书</template>
        </PHeader>
        <div class="app-page">
            <div class="delegateBuckDesc">
                <h1>企业现场审查计划通知书</h1>
                <p>编号：{{planno}}</p>
                <p class="title Name">企业名称:{{orgname}}</p>
                <p class="title">根据《质检总局关于贯彻落实<国务院关于调整工业产品生产许可证管理目录和试行简化审批程序的决定>的实施意见》、《工业产品现场审查实施规范》等规定，将派出核查组到贵企业进行现场核查。为确保核查工作顺利进行，请贵企业做好各项工作准备。现就有关事项通知如下：</p>
                <p class="title">1.现场核查时间初步定于{{plansdate}}至{{planedate}}，（具体时间确认与核查组长联系）。</p>
                <p class="title">2.请企业安排好生产计划，以保证现场核查过程中能正常生产。请确认有关设备满足《工业产品现场审查实施规范》要求。</p>
            </div>
            <div>
                <table border="1" class="applyCss" style="margin-top: 0.2rem;">
                      <colgroup>
                        <col width="20%">
                        <col width="10%">
                        <col width="20%">
                        <col width="20%">
                        <col width="30%">
                      </colgroup>
                      <tr>
                        <th class="applyTH">人员信息</th>
                        <th class="applyTH">姓名</th>
                        <th class="applyTH">职务</th>
                        <th class="applyTH">联系电话</th>
                        <th class="applyTH">所在单位名称</th>
                      </tr>   
                      <tr v-for="(item, index) in informationList" :key="index">
                        <td class="applyTD">{{item.type}}</td>
                        <td class="applyTD">{{item.linkman}}</td>
                        <td class="applyTD">{{item.isgroupleader}}</td>
                        <td class="applyTD">{{item.mobileno}}</td>
                        <td class="applyTD">{{item.orgname}}</td>
                      </tr>   
                </table>
            </div>
            <div class="delegateBuckDesc">
                <p class="title right">核查组织单位（盖章）</p>
                <p class="title right mother">年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;月&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;日</p>
            </div>
        </div>
    </div>
</template>
<script>
import PHeader from "../../components/PHeader.vue";
export default {
    components: {
        PHeader
    },
    data(){
        return{
            informationList: [],
            planno:"",
            orgname:"",
            plansdate:"",
            planedate:""
        }
    },
    created: function () {
        this.notificationID = client.loadSessionStorage("notificationID");
        this.reqInformation(this.notificationID);
  },
    methods:{
        onClickLeft(){},
        //获取人员信息
        reqInformation(notificationID){
            client.rpc("/qy/getJhtzsInfo/",{id:notificationID}).then(res=>{
                this.informationList = res.hczryList;
                this.planno = res.planno;
                this.orgname = res.orgname;
                this.plansdate = res.plansdate;
                this.planedate = res.planedate;
            });
        }
    },
    
}
</script>
<style scoped>
body.app-page{
    padding-top: 0.84rem;
    width: 100%;
    position: absolute;
    height: 617px;
}
.delegateBuckDesc{
    padding: 0.3rem;
    box-sizing: content-box;
}
.delegateBuckDesc h1{
    width: 100%;
    line-height: 0.35rem;
    font-size: 0.2rem;
    color: #333;
    text-align: center;
    font-weight: bold;
    margin-bottom: 0.2rem;
}
.delegateBuckDesc p{
    line-height: 100%;
    font-size: 0.15rem;
    color: #666;
    margin-top: 0.1rem;
    text-align: center;
    text-indent: 2em;
}
.delegateBuckDesc p{
    font-weight: bold;
    font-size: 0.18rem;
    color: #333;
    /* padding:0.1rem 0; */
}
.delegateBuckDesc .Name{
    text-align: left;
}
.delegateBuckDesc .right{
    text-align: right;
}
.delegateBuckDesc .mother{
    text-align: right;
    padding-right: 0.6rem;
}
</style>