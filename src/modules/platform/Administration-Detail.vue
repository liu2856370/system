<template>
    <div>
        <PHeader :showArrow="true" @leftClick="onClickLeft">
            <template #default>更多</template>
        </PHeader>
        <van-tabs v-model="active" sticky style="margin-top: 0.1rem;">
            <van-tab title="申请人基本信息">
                <template >
                    <van-cell title="是否免评审" value="否" />
                    <van-cell title="申请产品类别" value="化肥" />
                    <van-cell title="申请产品名称" value="复肥" />
                    <van-cell title="申报产品项目总投资" value="100000(万元)" />
                    <van-cell title="社保产品年设计生产力" value="合格" />
                    <van-cell title="申请人名称" value="住商肥料(青岛)有限公司" />
                    <van-cell title="单位注册地址" value="青岛市平度市" />
                    <van-cell title="邮政编码" value="252600" />
                    <van-cell title="电话" value="0532-88336225" />
                    <van-cell title="传真" value="" />
                    <van-cell title="电子邮箱" value="" />
                    <van-cell title="组织机构代码" value="763613016" />
                    <van-cell title="经济类型" value="" />
                    <van-cell title="工商登记机构" value="763613016" />
                    <van-cell title="营业执照注册号" value="" />
                    <van-cell title="经营期限(俩日期)" value="763613016" />
                    <van-cell title="成立日期" value="" />
                    <van-cell title="固定资产" value="763613016" />
                    <van-cell title="注册资金" value="" />
                    <van-cell title="年总产值" value="763613016" />
                    <van-cell title="年销售额" value="" />
                    <van-cell title="年纳税金额" value="763613016" />
                    <van-cell title="年利润" value="" />
                    <van-cell title="法定代表人" value="763613016" />
                    <van-cell title="法定代表人身份证号" value="" />
                    <van-cell title="企业代表人身份证号" value="763613016" />
                    <van-cell title="质量保证负责人" value="" />
                    <van-cell title="质量保证负责人身份证号" value="763613016" />
                    <van-cell title="联系人" value="" />
                    <van-cell title="联系人身份证号" value="763613016" />
                    <van-cell title="联系人手机" value="" />
                    <van-cell title="从业人员总数" value="763613016" />
                    <van-cell title="专业技术人员数" value="" />
                </template>
            </van-tab>
            <van-tab title="申请项目">
                <template>
                    <van-cell title="产品单元" value="复核肥料" />
                    <van-cell title="是否申请免检" value="申请" />
                    <van-cell title="生产设备、工艺装备">
                      <template #right-icon>
                        <van-tag plain round type="primary" @click="checkProduction">查看</van-tag>
                      </template>
                    </van-cell>
                    <van-cell title="检验仪器、设备">
                      <template #right-icon>
                        <van-tag plain round type="primary" @click="checkInspection">查看</van-tag>
                      </template>
                    </van-cell>
                    <van-cell title="原材料外购件、外协议">
                      <template #right-icon>
                        <van-tag plain round type="primary" @click="checkAgreement">查看</van-tag>
                      </template>
                    </van-cell> 
                    <van-cell title="本次是否申报" value="申报" />
                </template>                
            </van-tab>
            
            <van-tab title="企业主要负责人和技术人员情况">
                <template>
                    <van-cell title="姓名" value="刘星" />
                    <van-cell title="性别" value="男" />
                    <van-cell title="证件类型" value="" />
                    <van-cell title="证件号码" value="" />
                    <van-cell title="职务" value="" />
                    <van-cell title="职称" value="" />
                    <van-cell title="学历" value="" />
                    <van-cell title="所学专业" value="" />
                    <van-cell title="工作年限" value="" />
                    <van-cell title="工作岗位" value="" />
                    <van-cell title="备注" value="" />
                </template>
            </van-tab>
            <van-tab title="集团总公司及所属单位明细">
                <template>
                    <van-cell title="所属单位名称" value="住商肥料(青岛有限公司)" />
                    <van-cell title="与集团公司关系" value="总公司" />
                    <van-cell title="生产地址" value="复肥" />
                    <van-cell title="备注" value="100000(万元)" />
                </template>
            </van-tab>
            <van-tab title="申请材料">
                    <table border="1" class="applyCss" style="margin-top: 0.2rem;">
                      <colgroup>
                        <col width="50%">
                        <col width="50%">
                      </colgroup>
                      <tr>
                        <th class="applyTH">附件名称</th>
                        <th class="applyTH">已上传附件(点击下载)</th>
                      </tr>
                      <tr>
                        <td class="applyTD">全国工业产品生产许可申请书(含集团公司、分公司申请书、母子公司申请书以压缩包的形式上传)</td>
                        <td class="applyTD">申请单.pdf</td>
                      </tr>
                      <tr>
                        <td class="applyTD">营业执照(含集团公司、分公司、母子公司营业执照以压缩包的形式上传)</td>
                        <td class="applyTD">质量安全承诺书.pdf</td>
                      </tr>
                      <tr>
                        <td class="applyTD">营业执照(含集团公司、分公司、母子公司营业执照以压缩包的形式上传)</td>
                        <td class="applyTD">质量安全承诺书.pdf</td>
                      </tr>
                      <tr>
                        <td class="applyTD">实施细则及规范性文件要求的其他资料</td>
                        <td class="applyTD">质量安全承诺书.pdf</td>
                      </tr>
                      <tr>
                        <td class="applyTD">其他材料1</td>
                        <td class="applyTD">营业执照.pdf</td>
                      </tr>
                      <tr>
                        <td class="applyTD">其他材料2</td>
                        <td class="applyTD">营业执照.pdf</td>
                      </tr>
                      <tr>
                        <td class="applyTD">其他材料3</td>
                        <td class="applyTD">营业执照.pdf</td>
                      </tr>
                      <tr>
                        <td class="applyTD">其他材料4</td>
                        <td class="applyTD">营业执照.pdf</td>
                      </tr>
                      <tr>
                        <td class="applyTD">其他材料5</td>
                        <td class="applyTD">营业执照.pdf</td>
                      </tr>
                      <tr>
                        <td class="applyTD">其他材料6</td>
                        <td class="applyTD">营业执照.pdf</td>
                      </tr>
                      <tr>
                        <td class="applyTD">其他材料7</td>
                        <td class="applyTD">营业执照.pdf</td>
                      </tr>
                    </table>
            </van-tab>
            <van-tab title="许可档案">
                <template>
                  <div>
                    <van-list class="mt10" >
                        <van-cell title="申请材料" is-link @click="goMaterials" />
                        <van-cell title="受理通知书" is-link @click="goNotification" />
                        <van-cell title="核查材料" is-link @click="goCheckApply" />
                        <van-cell title="观察员报告" is-link @click="goObserver" />
                        <van-cell title="许可证书" is-link @click="goLicense" />
                        <van-cell title="不予许可决定书" is-link @click="goDecision" />
                        <van-cell title="照片寄送凭证" is-link @click="goPhoto" />
                    </van-list>
                  </div>
                </template>
            </van-tab>
            <van-tab title="许可信用记录">
                <template>
                  <template >
                    <van-cell title="产品类别" value="化肥" />
                    <van-cell title="产品名称" value="化肥" />
                    <van-cell title="审证单元" value="复肥" />
                    <van-cell title="产品品种" value="" />
                    <van-cell title="产品规格" value="合格" />
                    <van-cell title="申请类别" value="住商肥料(青岛)有限公司" />
                    <van-cell title="申请日期" value="2020-05-25" />
                    <van-cell title="审批状态" value="成功" />
                </template>
                </template>
            </van-tab>
        </van-tabs>
    </div>
</template>
<script>
import PHeader from "../../components/PHeader.vue";
import platformList from "../platform/common/platformList";


export default {
  name: "administrationDetail",
  data() {
    return {
            active: Number(localStorage.getItem('activeIdx'))?Number(localStorage.getItem('activeIdx')):0,
            tabList:['申请人基本信息','申请项目','企业主要负责人和技术人员情况','集团总公司及所属单位明细','申请材料','许可档案','许可信用记录'],           
    };
  },
  components: {
    PHeader,
    platformList,
  },
  methods: {
    onClickLeft() {
      this.$router.push("/admin-InfoView");
    },
    //生产设备、工艺装备
    checkProduction(){
      this.$router.push("/admin-EquipmentView");
    },
    //检验仪器、设备
    checkInspection(){
      this.$router.push("/admin-InstrumentView");
    },
    //原材料外购件、外协议
    checkAgreement(){
      this.$router.push("/admin-AgreementView");
    },
    //申请材料
    goMaterials(){
      this.$router.push("/admin-MaterialsView");
    },
    //受理通知书
    goNotification(){
      this.$router.push("/admin-NotificationView");
    },
    //核查材料
    goCheckApply(){
      this.$router.push("/admin-XkhcSeienceView");
    },
    //观察员报告
    goObserver(){
      this.$router.push("/admin-ObserverView");
    },
    //许可证书
    goLicense(){},
    //不予许可决定书
    goDecision(){},
    //照片寄送凭证
    goPhoto(){}
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