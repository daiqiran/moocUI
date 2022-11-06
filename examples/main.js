import 'mooc-ui-dqr3/dist/css/index.css';
import MUI from 'mooc-ui-dqr3';
//  import MUI from '/dist/index.umd.js';
import { createApp } from 'vue'
import App from './App.vue'
 
// Vue 3 

// const app = createApp(App)
// app.use(MUI)
// app.mount('#app')


createApp(App).use(MUI).mount('#app')
 
// Vue 2
// const vm = new Vue({
//     render: h => h(App)
// })
// vm.$mount('#app')