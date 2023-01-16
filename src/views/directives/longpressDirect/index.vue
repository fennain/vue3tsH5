<!-- 长按指令 -->
<template>
  <Navbar />
  <div class="content-box">
    <span class="text">长按指令 🍇🍇🍇🍓🍓🍓</span>
    <van-button type="primary" v-longpress="longpress"
      >长按2秒触发事件</van-button
    >
  </div>
</template>

<script setup lang="ts">
import { showToast } from "vant";
const longpress = () => {
  showToast("长按事件触发成功 🎉🎉🎉");
};
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
