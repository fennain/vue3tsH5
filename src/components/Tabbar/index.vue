<!-- TabBar -->
<template>
  <van-tabbar class="mx-auto right-0" :style="{ width: domWidth + 'px' }" v-model="appStore.tabbarIndex">
    <van-tabbar-item replace to="/" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item replace to="/goodsList" icon="friends-o">{{
      msg
    }}</van-tabbar-item>
    <van-tabbar-item replace to="/list" icon="setting-o">列表</van-tabbar-item>
    <van-tabbar-item replace to="/me" icon="setting-o">我的</van-tabbar-item>
  </van-tabbar>
</template>
<script setup lang="ts">
import { useAppStore } from "@/store/modules/app";
import { onMounted, ref, reactive, computed } from 'vue'
import { useDomWidth } from '@/hooks/useBasicLayout'

const { domWidth } = useDomWidth()
// const domWidth = computed(() => DomWidth.value)
const appStore = useAppStore();
defineProps<{ msg: string }>();
</script>