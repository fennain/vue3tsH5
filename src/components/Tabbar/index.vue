<template>
  <van-tabbar v-model="systeamStore.tabbarIndex">
    <van-tabbar-item replace to="/" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item icon="friends-o">{{ msg }}</van-tabbar-item>
    <van-tabbar-item replace to="/list" icon="setting-o">列表</van-tabbar-item>
    <van-tabbar-item replace to="/me" icon="setting-o">我的</van-tabbar-item>
  </van-tabbar>
</template>
<script setup lang="ts" name="tabbar">
import { SysteamStore } from "@/store/modules/systeam";
const systeamStore = SysteamStore();
defineProps<{ msg: string }>();
</script>
