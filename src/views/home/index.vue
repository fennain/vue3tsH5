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
  <div>{{ a.name }}</div>
  <div>{{ b }}</div>
  <van-button type="primary" @click="testMixin">主要按钮</van-button>
  <p v-for="(item, index) in 15" :key="index">{{ item }}</p>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive, computed, toRaw, toRef } from "vue";
import { SysteamStore } from "@/store/modules/systeam";

const systeamStore = SysteamStore();

const a = reactive({ name: "test" });
const b = toRef(a, "name");
onMounted(() => {
  console.log("onMounted", a.name, b);
  systeamStore.tabbarIndex = 0;
});
const A = computed(() => {
  return a.name;
});
const addCount = () => {
  // userStore.setCount(userStore.count + 1);
};
</script>

<style lang="scss" scoped>
p {
  font-size: 20px;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  // line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.bg {
  background: no-repeat url("@/assets/vue.svg") center;
  background-size: contain;
  height: 100%;
}
</style>
