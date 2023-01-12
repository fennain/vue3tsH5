<template>
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
  <van-tabbar v-model="active">
    <van-tabbar-item replace to="/" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
    <van-tabbar-item replace to="/list" icon="setting-o">列表</van-tabbar-item>
    <van-tabbar-item replace to="/me" icon="setting-o">我的</van-tabbar-item>
  </van-tabbar>
</template>
<script setup lang="ts">
import { ref } from "vue";
const active = ref(0);
</script>
<style lang="scss"></style>
