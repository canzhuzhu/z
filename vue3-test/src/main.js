import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// import ElementUI from "element-ui"
// import { Button } from 'vant'
import 'vant/lib/index'
const app = createApp(App)
console.log(app);
// app.use(ElementUI)
// app.use(Button)
app.mount('#app')
