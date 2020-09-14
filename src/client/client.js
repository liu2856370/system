import {
    Dialog
} from 'vant';
import storage from 'good-storage';
import qs from 'qs';

export default {
    rpc(url, data = {}) {
        if (window.flags.enableMock == true) {
            return this.rpcMock(url, data);
        } else {
            return this.rpcAxios(url, data);
        }
    },
    rpcMock(url, data) {
        return new Promise((resolve, reject) => {
            //动态引入,如下引入
            //let imgUrl = require('../images/' + imgName + '.png');  // 目录 + 文件名 + 后缀
            import("../mock/api/" + url + ".js").then(res => {
                let rspData = res.default[data.opid || 'index'](data);
                resolve(rspData);
            }).catch(error => {
                console.log(error);
            });
        });
    },
    rpcAxios(url, data) {
        //是否应该有统一的错误处理，后端返回错误信息，前端公共抛错·
        return new Promise((resolve, reject) => {
            //前置信息
            let params = {
                ...data
            };
            axios({
                    method: 'POST',
                    headers: {
                        'token': this.loadSessionStorage("logonInfoToken"),
                        'Content-Type': 'application/json'
                    },
                    data: params,
                    url: "http://218.57.139.17:30000/SHENPIAPI" + url,
                }).then(response => {
                    if (response) {
                        let rspData = response.data; //返回数据
                        let successFlag = rspData.success; //成功标志
                        let code = rspData.code;
                        let msg = rspData.msg;
                        if (!successFlag) {
                           /* //失败情况
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
                            */
                        } else {
                            //成功
                            return resolve(rspData.data, rspData);
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
    },
    /**
     * 读取数据，有第二个参数是true，会读取后把数据删除
     * @author liuzq 2018.11.06
     * @method loadStorage
     * @param {String} 键值名
     * @param {Boolean} 是否读取后删除数据
     */
    loadStorage: (key, isRemoved = false) => {
        let value = storage.get(key, {});
        if (isRemoved) {
            this.deleteStorage(key)
        }
        return value;
    },

    /**
     * 存储，有第三个参数是true，将会存储在localStorage，否则是在sessiontStorage
     * @author liuzq 2018.11.06
     * @method loadStorage
     * @param {String} 键值名
     * @param {obj} 存放的对象
     */
    saveStorage: (key, value) => {
        storage.set(key, value);
    },
    /**
     * //删除storage
     * @author liuzq 2018.11.06
     * @method loadStorage
     * @param {String} 键值名
     */
    deleteStorage: (key) => {
        storage.remove(key);
    },
    /**
     * 读取数据，有第二个参数是true，会读取后把数据删除
     * @author liuzq 2018.11.06
     * @method loadSessionStorage
     * @param {String} 键值名
     * @param {Boolean} 是否读取后删除数据
     */
    loadSessionStorage: (key, isRemoved = false) => {
        let value = storage.session.get(key, {});
        if (isRemoved) {
            this.deleteStorage(key)
        }
        return value;
    },

    /**
     * 存储，有第三个参数是true，将会存储在localStorage，否则是在sessiontStorage
     * @author liuzq 2018.11.06
     * @method saveSessionStorage
     * @param {String} 键值名
     * @param {obj} 存放的对象
     */
    saveSessionStorage: (key, value) => {
        storage.session.set(key, value);
    },
    /**
     * //删除storage
     * @author liuzq 2018.11.06
     * @method loadStorage
     * @param {String} 键值名
     */
    deleteSessionStorage: (key) => {
        storage.session.remove(key);
    }

}