<template>
  <van-sticky>
    <van-swipe
      class="my-swipe"
      :autoplay="5000"
      :height="150"
      indicator-color="white"
    >
      <van-swipe-item>
        <div class="bg"></div>
      </van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
  </van-sticky>
  <div class="w-[800px]"></div>
  <div>{{ a.name }}</div>
  <div>{{ b }}</div>
  <p v-for="(item, index) in 15" :key="index">{{ item }}</p>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive, computed, toRaw, toRef } from "vue";

const a = reactive({ name: "test" });
const b = toRef(a, "name");
onMounted(() => {
  console.log("onMounted", a.name, b);
});
const A = computed(() => {
  return a.name;
});
const addCount = () => {
  // userStore.setCount(userStore.count + 1);
};
</script>