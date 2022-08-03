<template>
  <div class="login">
    <s-header :name="type =='login'? '登录':'注册'" :back="'/home'"></s-header>
    <img class="logo" src="https://s.yezgea02.com/1604045825972/newbee-mall-vue3-app-logo.png" alt="">
    <div v-if = "type=='login'" class="login-body login"></div>
    <van-form @submit="onSubmit">
        <van-field 
        v-model="username" 
        name="username" 
        label="用户名"
        placeholder="用户名"
        :rules="[{reqiierd:true,message:'请填写用户名'}]"
        />
        <van-field
        v-model="password"
        type="password"
        name="password"
        label = "密码"
        placeholder = "密码"
        :rules="[{required:true,message:'请填写密码'}]"
        />
    </van-form>
  </div>
</template>

<script>
import sHeader from "../components/SimpleHeader.vue"
export default {
    name:"login",
    components:{
        sHeader,
    }
}
</script>

<style>

</style>