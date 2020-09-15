import Vue from 'vue';
import LoadingComponent from './custom/LoadingComponent.vue'


let Plugin = {
    install (Vue, option) {
            // 创建一个Vue的“子类”组件
        const LoadingConstructor = Vue.extend(LoadingComponent)

        // 创建一个该子类的实例,并挂载到一个元素上
        const instance = new LoadingConstructor()

        // 将这个实例挂载到动态创建的元素上,并将元素添加到全局结构中
        instance.$mount(document.createElement('div'))
        document.body.appendChild(instance.$el)

        // 在windows注册方法，控制组件
        window.loading = {
            show: function(){
                instance.show = true
            },
            hide: function(){
                instance.show = false
            }
        }
    }
}

Vue.use(Plugin)

export default Plugin;