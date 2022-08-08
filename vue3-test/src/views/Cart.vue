<template>
  <div class="cart-box">
    <s-header :name="'购物车'" :noback="true"></s-header>
    <div class="cart-body">
        <van-checkbox-group @change="groupChange" v-model="result" ref="checkboxGroup">
            <van-swipe-cell :right-width="50" v-for="(item,index) in list" :key="index">
                .good
            </van-swipe-cell>
        </van-checkbox-group>
    </div>
  </div>
</template>

<script>
import sHeader from "../components/SimpleHeader.vue"
export default {

}
</script>

<style>

</style>