//产品标签
const  labels = [
   {label:"秒批",value:"01"},
   {label:"身份证",value:"02"},
   {label:"信用卡",value:"03"},
   {label:"车贷",value:"04"},
   {label:"房贷",value:"05"},
   {label:"信用卡认证",value:"06"},
   {label:"芝麻授权",value:"07"},
   {label:"芝麻分",value:"08"},
   {label:"现金贷",value:"09"},
   {label:"消费贷",value:"10"},
   {label:"公积金",value:"11"},
   {label:"信用卡贷",value:"12"},
   {label:"人脸识别",value:"13"},
   {label:"手机号认证",value:"14"},
   {label:"社保",value:"15"}
]


//简单的把字符串日期(20180206)转成(2018-02-06),用法(dateStr |dateFormat())
const dateFormat = (param1) =>{
      if (!/\d{8}/.test(param1)) {
          return param1;
      }
      return param1.replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3');
}


    //日期格式化过滤器
const formatAllDate  = (param1, DateType, param2) => {
      // 当formatDateType=1时候，将数据库得到的时间字符串改为date类型 Mon Feb 26 2018 00:00:00 GMT+0800 (中国标准时间) (20180215125959|formatAllDate(1))
      if (!param1) {
          return '';
      }
      if (param1 === '0') {
          return '';
      }
      if (DateType === 1) {
          let year = param1.substr(0, 4);
          let month = param1.substr(4, 2);
          let day = param1.substr(6, 2);
          let hour, minute, second;
          if (param1.length > 8) {
              hour = param1.substr(8, 2);
              minute = param1.substr(10, 2);
              second = param1.substr(12, 2);
          } else {
              hour = 0;
              minute = 0;
              second = 0;
          }
          let date = new Date();
          date.setFullYear(year, month - 1, day);
          date.setHours(hour, minute, second);
          return date;
      } else if (DateType === 2) {
          //当formatDateType=2时候 将Date对象按格式输出 yyyy-MM-dd hh:mm:ss 用法 (date |formatAllDate(2,'yyyy-MM-dd hh:mm:ss')) 格式自己想要什么就写什么
          let date = new Date(param1);
          let o = {
              'M+': date.getMonth() + 1, //月份
              'd+': date.getDate(), //日
              'h+': date.getHours(), //小时
              'm+': date.getMinutes(), //分
              's+': date.getSeconds(), //秒
          };
          if (/(y+)/.test(param2)) {
              param2 = param2.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
          }
          for (let k in o) {
              if (new RegExp('(' + k + ')').test(param2)) {
                  param2 = param2.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
              }
          }
          return param2;
      } else if (DateType === 3) {
          //当formatDateType=3时候 将数据库的时间字符串'20180101121212'或者'20180101'转换为需要的时间格式'YYYY-MM-dd hh:mm:ss'或者 'MM月dd日，YYYY年'等’
          let year = param1.substr(0, 4);
          let month = param1.substr(4, 2);
          let day = param1.substr(6, 2);
          let hour, minute, second;
          if (param1.length > 8) {
              hour = param1.substr(8, 2);
              minute = param1.substr(10, 2);
              second = param1.substr(12, 2);
          } else {
              hour = 0;
              minute = 0;
              second = 0;
          }
          let date = new Date();
          date.setFullYear(year, month - 1, day);
          date.setHours(hour, minute, second);
          let o = {
              'M+': date.getMonth() + 1, //月份
              'd+': date.getDate(), //日
              'h+': date.getHours(), //小时
              'm+': date.getMinutes(), //分
              's+': date.getSeconds(), //秒
          };
          if (/(y+)/.test(param2)) {
              param2 = param2.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
          }
          for (let k in o) {
              if (new RegExp('(' + k + ')').test(param2)) {
                  param2 = param2.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
              }
          }
          return param2;
      } else {
          return ''
      }
  }

      // 金钱格式化过滤器 用法(a | formatMoney(1)) ||(a | formatMoney)
   const  formatMoney = (param, keepPoint) =>{
        let value;
        param = parseFloat(param);
        if (param === '' || isNaN(param)) {
            return null
        }
        // keepPoint==1的时候，不保留小数点  当keepPoint ===2 ,保留2位小数点，但是不四舍五入;其它的话，保留2位就是四舍五入。
        else if (keepPoint === 1) {
            value = parseFloat(param).toFixed(0).replace(/(\d)(?=(\d{3})+$)/g, '$1,');
        } else if (keepPoint === 2) {
            value = param.toString();
            value = value.indexOf('.') > 0 ? value.replace(/\.\d*/i, (xiaoshu) => {
                return (xiaoshu.length === 2 ? xiaoshu + '0' : xiaoshu.slice(0, 3))
            }) : param + '.00';
            value = value.replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
        } else {
            value = parseFloat(param).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
        }
        return value;
    }
    /**
     * 脱敏姓名，默认脱敏姓名的最后一位
     * @params val [string] 姓名
     * @params num [int] 脱敏的位数
     * @params type [string] 开头或结尾开始脱敏和中间脱敏
     * @author crx 2018-04-16
     */
 const formatName = (val, num, type) => {
      if (!num) {
          //没有指定则脱敏1位
          num = 1;
      }
      //如果要隐藏的位数大于字符串本身，则取字符串-1
      if (val.length <= num) {
          num = val.length - 1;
      }
      //若是中间脱敏则隐藏字符串中间所有的字符只保留头尾
      if (type === 'center') {
          num = val.length - 2;
      }
      let valStr = '';
      //脱敏多少位,显示多少个*号
      for (let i = 0; i < num; i++) {
          valStr += '*';
      }
      //默认从结尾开始脱敏
      if (!type) {
          type = 'right';
      }
      //根据脱敏类型进行脱敏
      if (type === 'right') {
          val = val.substring(0, val.length - num);
          val += valStr;
      } else if (type === 'left') {
          val = val.substring(num, val.length);
          val = valStr + val;
      } else if (type === 'center') {
          let start = val.substring(0, 1);
          let end = val.substring(val.length - 1, val.length);
          val = start + valStr + end;
      }
      return val;
  }
    // 脱敏手机号码 前四后三 中间四个*
  const  formatPhone =  (phone)=> {
      if (typeof phone !== 'string') {
          return '';
      }

      if (phone.length < 7) {
          return phone;
      }

      let reg = /^(\d{3})[\s\S]+(\d{4})$/;
      let value = phone.toString().replace(reg, '$1****$2');
      return value;
  }
const formatEditVal = (info)=>{
  let HTML_DECODE = {
    lt: '<',
    gt: '>',
    amp: '&',
    nbsp: ' ',
    quot: '"',
    copy: '©'
  };
  let tempSrc = "";
  if(info){
     tempSrc = info.replace(/&(lt|gt|nbsp|amp|quot);/gi, (all, key) => {
      return HTML_DECODE[key];
     });
  }
  return tempSrc;
}
//产品期限范围的单位（天:D,月:M,年:Y）
const unitFormatter = (val)=>{
  if(val && val != null){
    switch(val){
      case "D":
        return "天";
      case "M":
        return "月";
      case "Y":
        return "年";
      default:
        return "";
    }
  }
}
//产品标签翻译
const labelFormatter = (val)=>{
  // for(let item of labels){
  //   if(item.value == val){
  //       return item.label;
  //   }
  // }
  return val;
}



export default {
    install (Vue, option) {
        Vue.filter('formatMoney', formatMoney);
        Vue.filter('formatPhone', formatPhone); //脱敏手机号
        Vue.filter('formatName', formatName); //脱敏姓名
        Vue.filter('formatAllDate', formatAllDate);
        Vue.filter('dateFormat', dateFormat);
        Vue.filter('unitFormatter', unitFormatter);//产品期限范围的单位（天:D,月:M,年:Y）
        Vue.filter('labelFormatter', labelFormatter);//产品标签

        //公共方法
        Vue.prototype['formatEditVal']= formatEditVal;
    }
}
