<!-- 全局加载页 -->
<template>
  <transition name="van-fade">
    <div class="loading flex justify-center items-center" v-if="cfg.show">
      <van-loading size="35px" vertical>{{ cfg.msg }}</van-loading>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { Cfg } from "@/hooks/useLoading";

defineProps<{ cfg: Cfg }>();
</script>

<style scoped lang="scss">
.loading {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
}
</style>