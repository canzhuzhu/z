import {createRouter,createWebHashHistory} from "vue-router"

const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        // {
        //     path:"/",
        //     redirect:"/home"
        // },
        // {
        //     path:"/home",
        //     name:"home",
            
        // }
        {
            path:"/login",
            name:"/login",
            component:()=>import(/*webpackChunkName:"login"*/ "../views/Login.vue"),
            meta:{
                index:1
            }
        }
    ]
})

export default router