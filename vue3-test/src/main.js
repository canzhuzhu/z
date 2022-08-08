import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// import ElementUI from "element-ui"
// import { Button } from 'vant'
import 'vant/lib/index'
const app = createApp(App)

app.config.globalProperties.$filters = {
    prefix(url){
        if(url && url.startWith('http')){
            return url
        }else{
            url = `http://backend-api-01.newbee.ltd${url}`
            return url
        }
    }
}
// app.use(ElementUI)
// app.use(Button)
app.mount('#app')
