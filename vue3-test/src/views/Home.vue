<template>
  <div>
    <header class="home-header wrap" :class="{'active':headerScroll}">
        <router-link tag="i" to="./category"><i class="nbicon nbmenu2"></i></router-link>
        <div class="header-search">
        <span class="app-name">新风商城</span>
        <i class="iconfont icon-search"></i>
        <router-link tag="span" class="search-title" to="./product-list?from=home">山河无恙，人间皆安</router-link>
        </div>
        <router-link tag="span" class="login" to="./login" v-if="!isLogin">登录</router-link>
        <router-link class="login" tag="span" to="./user" v-else>
        <van-icon name="manager-o" />
        </router-link>
    </header>
    <nav-bar />
    <swiper :list="swiperList"></swiper>
    <div class="category-list">
        <div v-for="item in categoryList" v-bind:key="item.categoryId" @click="tips">
            <img src="item.imgUrl" alt="">
            <span>{{item.name}}</span>
        </div>
    </div>
  </div>
</template>

<script>
import {reactive,onMounted,toRefs,nextTick} from "vue"
import {useRouter} from "vue-router"
import navBar from "../components/NavBar"
import {getHome} from "../service/home"
import {getLocal} from "../components/js/utils"
export default { 

}
</script>

<style>

</style>