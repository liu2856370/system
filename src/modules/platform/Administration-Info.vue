<template>
  <div>
    <PHeader :showArrow="true" @leftClick="onClickLeft" rightText="查看更多" @rightClick="loginOut">
      <template #default>审核</template>
    </PHeader>
    <div style="margin-top: 0.1rem;">
      
      <van-form @submit="onSubmit">
        <van-cell title="申请人名称" value="青岛飞鹰达机电设备有限公司" />
        <van-cell title="申请类别" value="发证" />
        <van-cell title="许可事项" value="特种设备安装改造维修许可" />
        <van-cell title="具体许可类别" value="" />
        <van-cell title="发证类型" value="市局" />
        <van-field name="radio" label="受理结论">
              <template #input>
                <van-radio-group v-model="radio" direction="horizontal">
                  <van-radio name="1">受理</van-radio>
                  <van-radio name="2">补正</van-radio>
                  <van-radio name="3">不予受理</van-radio>
                </van-radio-group>
              </template>
        </van-field>
        <van-field v-model="opinionMaker" label="意见人" placeholder="请您输入意见人"/>
        <van-field v-model="opinion" rows="2" autosize label="本岗意见" type="textarea" placeholder="请您输入本岗意见"/>
      </van-form>
      <van-collapse v-model="activeNames">
        <van-collapse-item title="流转历史" name="1">
          <van-steps direction="vertical" :active="0">
            <van-step>
              <h3>2020-06-17 13:41</h3>
              <p>发送环节：青岛市受理审核</p>
              <p>操作：发送</p>
              <p>目标环节：受理决定</p>
              <p>历史意见</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;罗青：同意受理审查岗意见</p>
            </van-step>
            <van-step>
              <h3>2020-06-17 13:40</h3>
              <p>发送环节：青岛市受理审核</p>
              <p>操作：发送</p>
              <p>目标环节：受理决定</p>
              <p>历史意见</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;罗青：同意受理审查岗意见</p>
            </van-step>
          </van-steps>
        </van-collapse-item>
      </van-collapse>
    </div>
    
  </div>
</template>
<script>
import PHeader from "../../components/PHeader.vue";
import { RadioGroup, Radio } from 'vant';
export default {
  name: "administrationInfo",
  data() {
    return {
      radio: '1',
      opinionMaker: "",
      opinion: "",
      activeNames: ['1']
    };
  },
  components: {
    PHeader,RadioGroup, Radio
  },
  methods: {
    onClickLeft() {
      this.$router.push("/admin-ListView");
    },
    loginOut() {
      this.$router.push("/admin-DetailView");
    },
    onSubmit(){console.log(111111111111111111111111)}
  },
};
</script>
<style lang="less" scoped>
</style>