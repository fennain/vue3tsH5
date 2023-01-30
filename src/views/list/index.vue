<template>
  <van-index-bar>
    <template v-for="(item, index) in list" :key="index">
      <van-index-anchor :index="index" />
      <van-cell v-for="(it, i) in item" :key="i" :title="it" />
    </template>
  </van-index-bar>
</template>
<script setup lang="ts">
import { ref, onMounted, reactive, computed, toRaw } from "vue";

const list = {
  A: ["A-1", "A-2", "A-3"],
  B: ["B-1", "B-2", "B-3"],
  C: ["C-1", "C-2", "C-3"],
  D: ["D-1", "D-2", "D-3"],
  F: ["F-1", "F-2", "F-3"],
};
onMounted(() => {
  console.log(import.meta.env.VITE_BASE_URL);
});
</script>
<style lang="scss" scoped>
:deep(.van-index-bar__index) {
  margin-bottom: 4px;
}
</style>
