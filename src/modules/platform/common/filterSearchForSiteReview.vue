<template>
  <div class="filter-search">
    <div class="filter-tit">筛选</div>
    <van-form @submit="onSubmit" class="filter-form">
      <van-field v-model="orgname" name="orgname" placeholder="请输入单位名称" />
      <van-field v-model="itemName" name="itemName" placeholder="请输入许可事项" />
      <van-field v-model="applydescription" name="applydescription" placeholder="请输入申请类别" />
      <van-field v-model="producttype" name="producttype" placeholder="请输入产品类别" />

      <div class="filter-form-btns">
        <van-row>
          <van-col span="12">
            <van-button block type="default" native-type="button" @click="resetFormData">重置</van-button>
          </van-col>
          <van-col span="12">
            <van-button block type="info" native-type="submit">确定</van-button>
          </van-col>
        </van-row>
      </div>
    </van-form>
  </div>
</template>

<script>

export default {
  name: "filterSearchForSiteReview",
  data() {
    return {
      orgname: "",
      itemName: "",
      applydescription:"",
      producttype:""
    };
  },
  created() {
    
  },
  methods: {
    onSubmit(formData) {
      this.$emit("onSearchHandler",formData);
      this.resetFormData();
    },
    //重置数据
    resetFormData(){
      this.orgname = "";
      this.itemName = "";
      this.applydescription = "";
      this.producttype = "";
    }
  }
};
</script>

<style lang="less" scoped>
.filter-search {
  position: relative;
  .filter-form {
    .filter-form-status {
      .status-btn {
        margin: 0.1rem 0 0 0.1rem;
      }
    }
    .filter-form-btns {
      position: fixed;
      bottom: 0;
      width: 100%;
    }
  }
  .filter-tit {
    font-size: 0.16rem;
    height: 0.4rem;
    line-height: 0.4rem;
    color: #666;
    padding: 0.1rem;
  }
}
</style>