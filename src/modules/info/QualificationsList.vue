<template>
  <div class="index">
    <PHeader :showArrow="true">{{certificateList[0].xksx}}</PHeader>
    <van-cell :title="total">
      <div @click="isShowPopup = true">筛选</div>
    </van-cell>
    <platform-list :list="certificateList">
      <template #fixed="{slotProps}">
        <van-row class="org-info">
          <van-col
            span="12"
            class="org-name"
            @click="goInfoQuery(slotProps.id)"
          >{{slotProps.orgname}}</van-col>
          <van-col span="12" class="org-tags"></van-col>
        </van-row>
        <van-cell title="许可事项名称" :value="slotProps.xksx" />
        <van-cell title="产品类别" :value="slotProps.protype" />
        <van-cell title="许可证编号" :value="slotProps.unitxukecertnum" />
      </template>
      <template #variable="{slotProps}">
        <van-cell title="所在地区" :value="slotProps.region" />
        <van-cell title="营业执照注册号" :value="slotProps.busliceno" />
        <van-cell title="组织机构代码" :value="slotProps.shxycode" />
        <van-cell title="有效期" :value="slotProps.unitxukecertnumeffectivedate" />
        <van-cell title="审批部门" :value="slotProps.spbm" />
        <van-cell title="设定依据">
          <template #right-icon>
            <van-tag
              plain
              round
              type="primary"
              size="large"
              @click="queryBasisList(slotProps.id)"
            >查看</van-tag>
          </template>
        </van-cell>
      </template>
    </platform-list>
    <van-popup v-model="isShowPopup" position="right" :style="{ width: '75%', height:'100%' }">
      <filterSearch @onSearchHandler="searchHandler"></filterSearch>
    </van-popup>
  </div>
</template>

<script>
import PHeader from "../../components/PHeader.vue";
import platformList from "../common/platformList";
import filterSearch from "./common/filterSearch";
export default {
  name: "accordingInfo",
  components: {
    platformList,
    PHeader,
    filterSearch,
  },
  data() {
    return {
      active: 0,
      value: "",
      total: "",
      certificateList: [],
      isShowPopup: false,
    };
  },
  created() {
    this.certificateList = client.loadStorage("certificateList");
    this.total = "共" + this.certificateList.length + "条";
  },
  methods: {
    goInfoQuery(id) {
      client.saveStorage("companyId", id);
      this.$router.push("/info-query");
    },
    queryBasisList(id) {
      client.saveStorage("reportId", id);
      this.$router.push("/set-basis-list");
    },
     searchHandler(formData) {
      //formData筛选的数据
      this.isShowPopup = false;
      //请求数据
    }
  }
};
</script>

<style lang="less" scoped>
.org-info {
  padding: 0.1rem 0.15rem;
  color: #7b7b7b;
  .org-name {
    font-size: 0.16rem;
  }
  .org-tags {
    text-align: right;
  }
}
</style>