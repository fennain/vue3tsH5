<template>
  <div>
    <van-search v-model="value" placeholder="请输入搜索关键词" />
    <div class="wrapper">
      <div class="content">
        <div class="pulldown-wrapper">
          <div v-html="tipText"></div>
        </div>
        <van-cell v-for="item in list" :key="item" :title="item" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, reactive, computed, toRaw } from "vue";
// https://better-scroll.github.io/docs/zh-CN/
import BScroll from "@better-scroll/core";
import ObserveDOM from "@better-scroll/observe-dom";
import PullDown from "@better-scroll/pull-down";
import Pullup from "@better-scroll/pull-up";
BScroll.use(ObserveDOM).use(PullDown).use(Pullup);

const ARROW_BOTTOM =
  '<svg width="16" height="16" viewBox="0 0 512 512"><path fill="currentColor" d="M367.997 338.75l-95.998 95.997V17.503h-32v417.242l-95.996-95.995l-22.627 22.627L256 496l134.624-134.623l-22.627-22.627z"></path></svg>';
const ARROW_UP =
  '<svg width="16" height="16" viewBox="0 0 512 512"><path fill="currentColor" d="M390.624 150.625L256 16L121.376 150.625l22.628 22.627l95.997-95.998v417.982h32V77.257l95.995 95.995l22.628-22.627z"></path></svg>';

const value = ref("");

const list = ref<number[]>([]);
const tipText = ref("");
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
    pullDownRefresh: {
      // 开启下拉刷新
      threshold: 70, // 下拉刷新的距离
      stop: 50, // 回弹悬停的距离
    },
  });
  BS.value.on("pullingUp", pullingUpHandler);
  BS.value.on("pullingDown", pullingDownHandler);
  BS.value.on("enterThreshold", () => {
    tipText.value = `${ARROW_BOTTOM} Pull down`;
  });
  BS.value.on("leaveThreshold", () => {
    tipText.value = `${ARROW_UP} Release`;
  });
});
const init = () => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      for (let i = 0; i < 10; i++) {
        list.value.push(list.value.length + 1);
      }
      // BS.value?.refresh();
      resolve();
    }, 1000);
  });
};
/**
 * 下拉刷新
 */
const pullingDownHandler = async () => {
  // 清空列表数据
  tipText.value = "Loading...";
  console.log("刷新");
  // 重新加载数据
  await init();
  tipText.value = "Refresh succeed";
  BS.value?.finishPullDown();
};
/**
 * 上拉加载
 */
const pullingUpHandler = async () => {
  console.log("到底了");
  // 重新加载数据
  await init();
  BS.value?.finishPullUp();
};
</script>
<style lang="scss" scoped>
.wrapper {
  overflow: hidden;
  height: 500px;
  position: relative;
  .pulldown-wrapper {
    position: absolute;
    width: 100%;
    padding: 15px;
    transform: translateY(-100%) translateZ(0);
    text-align: center;
    color: #999;
    font-size: 16px;
  }
}
</style>
