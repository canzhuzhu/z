<template>
  <div class="login">
    <s-header :name="type =='login'? '登录':'注册'" :back="'/home'"></s-header>
    <img class="logo" src="https://s.yezgea02.com/1604045825972/newbee-mall-vue3-app-logo.png" alt="">
    <div v-if = "type=='login'" class="login-body login">
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

         <div style="margin: 16px;">
          <div class="link-register" @click="toggle('register')">立即注册</div>
          <van-button round block color="#1baeae" native-type="submit">登录</van-button>
        </div>
    </van-form>
  </div>
  <div v-else class="login-body register">
    <van-form @submit="onSubmit">
      <van-field 
      v-model="username1"
      name="username1"
      label="用户名"
      placeholder="用户名"
      :rules="[{required:true,message:'请填写用户名'}]"
      />
      <van-field
      v-model="password1"
      name="password1"
      type="password"
      label="密码"
      placeholder="密码"
      :rules="[{required:true,message:'请填写密码'}]"
      />
      <div style="margin: 16px;">
        <div class="link-login" @click="toggle('login')">已有登录账号</div>
        <van-button round block color="#1baeae" native-type="submit">注册</van-button>
      </div>
    </van-form>
  </div>
  </div>
</template>

<script>
import sHeader from "../components/SimpleHeader.vue"
import {reactive,toRefs} from "vue"
import {login ,register} from "../service/user"
import {setLocal } from "../common/js/utils"
import md5 from "js-md5"
import {Toast} from "vant"

export default {
  setup(){
    // const verifyRef = ref(null)
    const state = reactive({
      username:"",
      password:"",
      username1:"",
      password1:"",
      type:"login",
    })

    const toggle = (v)=>{
      state.type = v
      state.verify=""
    }

    const onSubmit = async (values)=>{
      // console.log('verifyRef.value.imgCode',verifyRef.value.imgCode);
      // state.imgCode = verifyRef.value.imgCode||""
      if(state.type=='login'){
        const {data} = await login({
          "loginName":values.username,
          "passwordMd5":md5(values.password)
        })

        setLocal("token",data)
        window.location.href="/"
      }else{
        await register({
          "loginName":values.username1,
          "password":values.password1
        })

        Toast.success("注册成功")
        state.type = "login"
        // state.verify = ""
       }
    }
    return {
      ...toRefs(state),
      toggle,
      onSubmit,
    }
  },
    name:"login",
    components:{
        sHeader,
    }
}
</script>

<style lang="less" scoped>
  .login {
    .logo {
      width: 120px;
      height: 120px;
      display: block;
      margin: 80px auto 20px;
    }

    .login-body {
      padding: 0 20px;
    }

    .login {
      .link-register {
        font-size: 14px;
        margin-bottom: 20px;
        color: #1989fa;
        display: inline-block;
      }
    }
    .register {
      .link-login {
        font-size:14px;
        margin-bottom: 20px;
        color: #1989fa;
        display: inline-block;
      }
    }
  }
</style>