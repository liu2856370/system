import { Dialog } from 'vant';

export default {
    rpc(url,data = {}){
        if(window.flags.enableMock == true){
           return this.rpcMock(url,data);
        }else{
           return this.rpcAxios(url,data);
        }
    },
    rpcMock(url, data){
       return new Promise((resolve, reject) => {
           //动态引入,如下引入
           //let imgUrl = require('../images/' + imgName + '.png');  // 目录 + 文件名 + 后缀
           import("../mock/api/"+url+".js").then(res=>{
                let rspData = res.default[data.opid||'index'](data);
                resolve(rspData);
            }).catch(error=>{
                console.log(error);
            });
        });
    },
    rpcAxios(url, data){
        //是否应该有统一的错误处理，后端返回错误信息，前端公共抛错·
        return new Promise((resolve, reject) => {
            //前置信息
            let params = {
                header: {
                    UUID: '',
                    channel: '',
                    transId: ''
                },
                body: {
                    ...data
                }
            };
            axios.post(url, params)
                .then(response => {
                    if (response) {
                        let rspData = response;//返回数据
                        let successFlag = rspData.success;//成功标志
                        let code = rspData.code;
                        let msg = rspData.msg;
                        if (!successFlag) {
                            //失败情况
                            if (process.env.NODE_ENV !== 'production') {
                                //非生产环境
                                Dialog.alert({
                                    title: '提示',
                                    message: `<p>编码:${code}</p><p>信息:${msg}</p>`,
                                });
                            } else {
                                Dialog.alert({
                                    title: '提示',
                                    message: `<p>错误编码:${code}</p><p>错误信息:${msg}</p>`,
                                });
                            }
                            //注意session超时的处理
                        } else {
                            //成功
                            return resolve(rspData.data,rspData);
                        }
                    } else {
                        //公共处理一下错误信息
                        reject('系统错误，请联系管理员');
                    }
                })
                .catch(err => {
                    //需要做一下错误处理
                    console.log(err)
                });
        });
    }
}