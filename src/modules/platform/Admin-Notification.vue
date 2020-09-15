<template>
    <div>
        <PHeader :showArrow="true" @leftClick="onClickLeft">
            <template #default>受理通知书</template>
        </PHeader>
        <template>
            <div v-for="(item, index) in pictureList" :key="index" class="imageStyle">
              <van-image width="3rem" height="3rem" fit="contain" src="https://img.yzcdn.cn/vant/cat.jpeg"/>
              <p>现场审查计...</p>
          </div>
        </template>
    </div>
</template>
<script>
import PHeader from "../../components/PHeader.vue";
export default {
    data(){
        return{
            pictureList:[{
                
            },{}]
        };
    },
    components: {
        PHeader,
    },
    methods:{
        onClickLeft(){}
    }
}
</script>
<style scoped>
.imageStyle{
  text-align: center;
}
</style>