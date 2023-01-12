<template>
  <van-sticky>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
  </van-sticky>
  <div>{{ store.count }}</div>
  <van-button type="primary" @click="addCount">主要按钮</van-button>
  <p v-for="(item, index) in 15" :key="index">{{ item }}</p>
  <HelloWorld msg="Vite + Vue" />
</template>

<script setup lang="ts">
import HelloWorld from "@/components/HelloWorld.vue";
import { userStore } from "@/store/modules/user";
import { ref, onMounted, reactive, computed, toRaw } from "vue";

const store = userStore();
const a = reactive({ name: "test" });
onMounted(() => {
  console.log(store.count, a);
});
const addCount = () => {
  store.setCount(store.count + 1);
};
</script>

<style lang="scss" scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
p {
  font-size: 20px;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>
