import {createRouter,createWebHashHistory} from "vue-router"

const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:"/",
            redirect:"/home"
        },
        {
            path:"/home",
            name:"home",
            
        },
        {
            path:"/login",
            name:"login",
            component:()=>import(/*webpackChunkName:"login"*/ "../views/Login.vue"),
            meta:{
                index:1
            }
        },
        {
            path:"/home",
            name:"home",
            component:()=>import(/*webpackCHunkName:"home"*/"../views/Home.vue")
        }
    ]
})

export default router