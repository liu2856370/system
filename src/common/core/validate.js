/**
 * 验证密码
 */
export const validatePW = (rule, value,ruleForm, callback) => {
  if (value === '') {
    callback(new Error('请输入密码'));
  } else {
    callback();
  }
}
/**
 * 再次验证密码
 */
export const validatePWAgain = (rule, value, firstPW, callback) => {
  if (value === '') {
    callback(new Error('请再次输入密码'));
  } else if (value !== firstPW) {
    callback(new Error('两次输入密码不一致!'));
  } else {
    callback();
  }
}
/**
 * 验证手机号
 */
export const validatePhone = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入手机号'));
  }else {
    const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
    if(!reg.test(value)){
      callback("请输入正确格式的手机号");
    }else{
      callback();
    }
  }
}

