<template>
    <div class="me-detail">
        <!-- <van-uploader v-model="fileList" :after-read="afterRead" /> -->
        <van-uploader v-model="fileList" :after-read="afterRead">
          <van-button icon="plus" type="primary">拍照/上传</van-button>
        </van-uploader>
        <van-button type="primary" v-show="isShowSubmit" block @click="onSubmit">提交</van-button>
    </div>
</template>
 
<script>
import { Toast } from 'vant';
export default {
  data () {
    return {
      isShowSubmit:false,
      fileList:[]
    }
  },
  methods: {
    afterRead(file) {
      // file.status = 'uploading';
      // file.message = '上传中...';
    },
    onSubmit(){
      let size = "";
      for(let i = 0;i<this.fileList.length;i++){
        let item = this.fileList[i].file;
        size+=item.size;
      }
      if(size>5120*2014){
        Toast('文件大小不能超过5M');
      }
    }
  }
}
</script>
 
<style>
.van-uploader__input-wrapper{
  width: 100%;
}
</style>