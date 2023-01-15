<template>
  <div class="tabbar-page">
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

  <Tabbar msg="测试" />
</template>
<script setup lang="ts">
import Tabbar from "@/components/Tabbar/index.vue";
</script>
<style lang="scss" scoped>
.tabbar-page {
  padding-bottom: var(--van-tabbar-height);
}
</style>
