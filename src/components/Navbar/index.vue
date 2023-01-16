<!-- 导航栏 -->
<template>
  <van-nav-bar
    :title="route.meta.title"
    left-text="返回"
    left-arrow
    fixed
    placeholder
    safe-area-inset-top
    @click-left="onClickLeft"
  />
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();

const onClickLeft = () => history.back();
</script>

<style scoped lang="scss"></style>
