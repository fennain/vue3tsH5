<template>
  <van-cell-group title="分组1" inset>
    <van-cell title="单元格" value="内容" />
  </van-cell-group>
  <van-cell-group title="自定义指令" inset>
    <van-cell title="复制指令" is-link to="copyDirect" />
    <van-cell title="防抖指令" is-link to="debounceDirect" />
    <van-cell title="节流指令" is-link to="throttleDirect" />
    <van-cell title="长按指令" is-link to="longpressDirect" />
  </van-cell-group>
  <div class="oper">
    <van-button type="danger" @click="logout">退出登录</van-button>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, reactive, computed, toRaw } from "vue";
import { useRouter } from "vue-router";
import { UserStore } from "@/store/modules/user";
import { SysteamStore } from "@/store/modules/systeam";
import useClipboard from "vue-clipboard3";
import { showToast } from "vant";

const userStore = UserStore();
const systeamStore = SysteamStore();
const router = useRouter();
const { toClipboard } = useClipboard();

onMounted(() => {
  console.log(toRaw(userStore.getUserInfo));
  systeamStore.tabbarIndex = 3;
});

const copy = async () => {
  try {
    await toClipboard("Any text you like");
    showToast("Copied to clipboard");
    console.log("Copied to clipboard");
  } catch (e) {
    console.error(e);
  }
};

const logout = () => {
  userStore.logout().then(() => {
    location.reload();
  });
};
</script>

<style lang="scss" scoped>
.oper {
  margin-top: 10px;
  @include center;
}
</style>
