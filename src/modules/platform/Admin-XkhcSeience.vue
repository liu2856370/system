<template>
  <div>
    <PHeader :showArrow="true">
      <template #default>核查材料</template>
    </PHeader>
    <table border="1" class="applyCss" style="margin-top: 0.2rem;">
      <colgroup>
        <col width="50%" />
        <col width="50%" />
      </colgroup>
      <tr>
        <th class="applyTH">规定提交材料</th>
        <th class="applyTH">已提交材料</th>
      </tr>
      <tr>
        <td class="applyTD">实地核查办法*</td>
        <td class="applyTD"></td>
      </tr>
      <tr>
        <td class="applyTD">实地核查报告*</td>
        <td class="applyTD">现场审查报告.zip</td>
      </tr>
      <tr>
        <td class="applyTD">实地核查总结</td>
        <td class="applyTD"></td>
      </tr>
      <tr>
        <td class="applyTD">抽样单*</td>
        <td class="applyTD"></td>
      </tr>
      <tr>
        <td class="applyTD">山东省行政许可审查人员行为规范确认表回执*</td>
        <td class="applyTD">回执.zip</td>
      </tr>
      <tr>
        <td class="applyTD">行政许可审查人员行为承诺书</td>
        <td class="applyTD">承诺书.zip</td>
      </tr>
      <tr>
        <td class="applyTD">其他材料1</td>
        <td class="applyTD"></td>
      </tr>
    </table>
  </div>
</template>
<script>
import PHeader from "../../components/PHeader.vue";
export default {
  name: "administrationXkhcSeience",
  data() {
    return {};
  },
  components: {
    PHeader,
  },
};
</script>
<style scoped>
.applyCss{
    margin-top: 0.2rem;
    width: 4.14rem;
    border-collapse: collapse;
    border-radius: 0.1rem;
  }
  .applyTD{
    text-align: center;
    font-size: 0.2rem;
    line-height: 0.3rem;
  }
  .applyTH{
    font-size: 0.2rem;
  }
</style>