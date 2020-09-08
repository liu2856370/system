<template>
    <div class="index">
        <PHeader :showArrow="true"  @leftClick="onClickLeft">
        <template #default>
            许可档案
        </template>
        </PHeader>
        <van-tabs  v-model="active" 
            @click="tabHandler"
            :ellipsis="false"
            :border="false">
            <van-tab v-for="(tabname,idx) in tabList" :key="idx" :title="tabname" >
                <van-image src="https://img.yzcdn.cn/vant/cat.jpeg">
                    <template #default>
                        <div class="text" style="margin-top: 0.3rem;color: #646566;font-size: 14px;text-align: center;">全国工业产品生产许可证</div>
                    </template>
                </van-image>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
    import PHeader from '@/components/PHeader.vue'
    import { Toast } from 'vant'
    export default {
        name: 'index',
        components: {
            PHeader
        },
        data(){
        return{
            active: Number(localStorage.getItem('activeIdx'))?Number(localStorage.getItem('activeIdx')):0,
            tabList:['受理通知书','许可证书','不予许可决定书','证照寄送凭证']
        }
        },
        methods:{
            onClickLeft() {
                
            },
            // tab点击事件
            tabHandler(idx){
                this.active = idx;
                localStorage.setItem('activeIdx',idx)   // 将选中的tab缓存起来
            }
            
        }
    }
</script>
<style lang="less" scoped>
    .van-image{
        width: 50%;
        height: 50%;
        margin-top: 0.3rem;
        margin-left: 1rem;
        position: relative;
    }
</style>