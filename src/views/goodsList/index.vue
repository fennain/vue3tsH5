<template>
  <div class="wrapper">
    <div class="content">
      <van-cell v-for="item in list" :key="item" :title="item" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, reactive, computed, toRaw } from "vue";
import BScroll from "@better-scroll/core";
import ObserveDOM from "@better-scroll/observe-dom";
import Pullup from "@better-scroll/pull-up";
BScroll.use(ObserveDOM).use(Pullup);

const list = ref<number[]>([]);
const refreshing = ref(false);
const BS = ref<BScroll>();

onMounted(() => {
  console.log(import.meta.env.VITE_BASE_URL);
  for (let i = 0; i < 30; i++) {
    list.value.push(i);
  }
  BS.value = new BScroll(".wrapper", {
    scrollY: true,
    click: true,
    probeType: 3,
    // bounce: true, // 开启回弹
    observeDOM: true, // 开启自动refresh()
    pullUpLoad: true, // 开启上拉加载
  });
  BS.value.on("pullingUp", pullingUpHandler);
});
const init = () => {
  setTimeout(() => {
    if (refreshing.value) {
      list.value = [];
      refreshing.value = false;
    }

    for (let i = 0; i < 10; i++) {
      list.value.push(list.value.length + 1);
    }
    BS.value?.finishPullUp();
    // BS.value?.refresh();
  }, 1000);
};
/**
 * 下拉刷新
 */
const onRefresh = () => {
  // 清空列表数据

  // 重新加载数据
  init();
};
/**
 * 上拉加载
 */
const pullingUpHandler = () => {
  console.log("到底了");
  // 重新加载数据
  init();
};
</script>
<style lang="scss" scoped>
.wrapper {
  overflow: hidden;
  height: 500px;
}
</style>
