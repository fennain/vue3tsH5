<template>
  <van-cell-group>
    <van-cell title="单元格" value="内容" />
    <van-cell title="单元格" value="内容" label="描述信息" />
  </van-cell-group>
  <p v-for="(item, index) in 15" :key="index">{{ item }}</p>
</template>
<script setup lang="ts">
import { ref, onMounted, reactive, computed, toRaw } from "vue";
import { useRouter } from "vue-router";
import { UserStore } from "@/store/modules/user";

const userStore = UserStore();
const router = useRouter();
onMounted(() => {
  console.log(toRaw(userStore.getUserInfo));
});
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
</style>
