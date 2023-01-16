<!-- 防抖指令 -->
<template>
  <Navbar />
  <div class="content-box">
    <span class="text">防抖指令 🍇🍇🍇🍓🍓🍓</span>
    <van-button type="primary" v-debounce="debounceClick"
      >防抖按钮 (0.5秒后执行)</van-button
    >
  </div>
</template>

<script setup lang="ts">
import { showToast } from "vant";
const debounceClick = () => {
  showToast("我是防抖按钮触发的事件 🍍🍓🍌");
  console.log("防抖指令");
};
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
