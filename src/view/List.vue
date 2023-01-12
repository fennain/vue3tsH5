<template>
  <p v-for="(item, index) in 15" :key="index">{{ item }}</p>
</template>
<script setup lang="ts">
import { ref, onMounted, reactive, computed, toRaw } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
onMounted(() => {
  console.log(import.meta.env.VITE_BASE_URL);
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
