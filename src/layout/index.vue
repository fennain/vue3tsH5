<template>
  <div class="tabbar-page h-full">
    <router-view v-slot="{ Component, route }">
      <keep-alive>
        <component
          :is="Component"
          v-if="route.meta.keepAlive"
          :key="route.name"
        />
      </keep-alive>
      <component :is="Component" v-if="!route.meta.keepAlive" />
    </router-view>
  </div>

  <Tabbar :msg="test" />
</template>
<script setup lang="ts">
import { ref } from "vue";
const test = ref("测试");
</script>
<style lang="scss" scoped>
.tabbar-page {
  padding-bottom: var(--van-tabbar-height);
}
</style>