<template>
  <div class="filter-search">
    <div>筛选</div>
    <van-form @submit="onSubmit">
      <van-field
        readonly
        clickable
        name="date"
        :value="date"
        placeholder="请选择申报日期"
        @click="showCalendar = true"
      />
      <van-field v-model="cardNo" name="cardNo"  :style="{ height: '30%' }" placeholder="请输入申办号" />
      <van-calendar v-model="showCalendar"  @confirm="onCalendarConfirm" />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  name: "filterSearch",
  data() {
    return {
      cardNo: "",
      date:"",
      showCalendar: false,
    };
  },
  methods: {
    onCalendarConfirm(date) {
      this.value = `${date.getMonth() + 1}/${date.getDate()}`;
      this.showCalendar = false;
    },
    onSubmit(){

    }
  },
};
</script>

<style lang="less" scoped>
</style>