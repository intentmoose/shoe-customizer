import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.config.ignoredElements = ['a-scene', 'a-gltf-model', 'a-entity', 'a-sky']

new Vue({
  render: h => h(App),
}).$mount('#app')
