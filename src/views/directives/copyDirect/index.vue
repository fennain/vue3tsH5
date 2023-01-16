<!-- 复制指令 -->
<template>
  <Navbar />
  <div class="content-box">
    <span class="text">复制指令 🍇🍇🍇🍓🍓🍓</span>
    <div class="box-content">
      <van-cell-group inset>
        <van-field
          v-model="data"
          center
          clearable
          label=""
          placeholder="请输入内容"
        >
          <template #button>
            <van-button size="small" type="primary" v-copy="data"
              >复制</van-button
            >
          </template>
        </van-field>
      </van-cell-group>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const data = ref<string>("我是被复制的内容 🍒 🍉 🍊");
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
