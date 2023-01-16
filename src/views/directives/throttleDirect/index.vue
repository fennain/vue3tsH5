<!-- 节流指令 -->
<template>
  <Navbar />
  <div class="content-box">
    <span class="text">节流指令 🍇🍇🍇🍓🍓🍓</span>
    <van-button type="primary" v-throttle="throttleClick"
      >节流按钮 (立即执行，1秒内只能触发1次)</van-button
    >
  </div>
</template>

<script setup lang="ts">
import { showToast } from "vant";
const throttleClick = () => {
  showToast("我是节流按钮触发的事件 🍍🍓🍌");
  console.log("节流指令");
};
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
