<template>
  <div class="filter-search">
    <div class="filter-tit">筛选</div>
    <van-form @submit="onSubmit" class="filter-form">
      <van-field v-model="orgname" name="orgname" placeholder="请输入单位名称" />
      <van-field v-model="producttypename" name="producttypename" placeholder="请输入产品类别" @click="showTypes = true" />
      <van-field
        readonly
        clickable
        name="area"
        :value="areaVal"
        placeholder="所在地址"
        @click="showArea = true"
      />
      <van-popup v-model="showTypes" position="bottom">
        <van-picker
          show-toolbar
          :columns="typeColumns"
          @cancel="showTypes = false"
          @confirm="onTypesConfirm"
        />
      </van-popup>
      <van-popup v-model="showArea" position="bottom">
        <van-area :area-list="areaList" @confirm="onAreaConfirm" @cancel="showArea = false" />
      </van-popup>
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
//单位名称（输入框）；产品类别（输入框）；所在地址（级联）
export default {
  name: "filterSearch",
  data() {
    return {
      orgname: "",
      producttypename: "",
      areaVal: "",
      showArea: false,
      showTypes: false,
      typeColumns: ["产品类别1", "产品类别2", "产品类别3"],
      areaList: {
        province_list: {},
        city_list: {},
        county_list: {},
      },
    };
  },
  created() {
    client.rpc("/dic/getArea").then((res) => {
      res.map((item) => {
        if (/0{4}$/.test(item.code) || item.code == 379900) {
          this.areaList.province_list[item.code] = item.caption;
        } else if (/0{2}$/.test(item.code)) {
          this.areaList.city_list[item.code] = item.caption;
        } else {
          this.areaList.county_list[item.code] = item.caption;
        }
      });
    });
  },
  methods: {
    onSubmit(formData) {
      this.$emit("onSearchHandler",formData);
    },
    onAreaConfirm(values) {
      this.areaVal = values.map((item) => item?.name).join("");
      this.showArea = false;
    },
    onTypesConfirm(value) {
      this.producttypename = value;
      this.showTypes = false;
    },
    //重置数据
    resetFormData(){
      this.orgname = "";
      this.producttypename = "";
      this.areaVal = "";
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