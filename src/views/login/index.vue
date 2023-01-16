<template>
  <div class="login-container">
    <van-image class="logo" fit="contain" :src="$require('@/assets/vue.svg')" />
    <van-form @submit="onSubmit">
      <!-- <van-cell-group inset> -->
      <van-field
        v-model="loginForm.username"
        name="username"
        label=""
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="loginForm.password"
        type="password"
        name="password"
        label=""
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <!-- </van-cell-group> -->
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">
          登录
        </van-button>
      </div>
    </van-form>
  </div>
</template>
<script setup lang="ts">
import {
  ref,
  onMounted,
  reactive,
  computed,
  toRaw,
  getCurrentInstance,
} from "vue";
import { useRouter } from "vue-router";
import { Login } from "@/api/interface";
import { UserStore } from "@/store/modules/user";
import md5 from "js-md5";
import logoPlaceholder from "@/assets/vue.svg";

const router = useRouter();
const userStore = UserStore();
const { proxy } = getCurrentInstance() as any;
onMounted(() => {
  console.log(import.meta.env.VITE_BASE_URL);
});

const loginForm = reactive({
  username: "admin",
  password: "123456",
});
const onSubmit = (data: Login.ReqLoginForm) => {
  console.log("submit", data);
  proxy.$loadingShow();
  userStore
    .login({ ...loginForm, password: md5(loginForm.password) })
    .then(() => {
      proxy.$loadingHide();
      router.push("/home");
    })
    .catch(() => {
      proxy.$loadingHide();
    });
};
</script>
<style lang="scss" scoped>
// $u-primary: #3c9cff;
.login-container {
  height: 100vh;
  background-color: #f7f8fa;
  padding: 0 10px;
  @include center(column);
  .logo {
    width: 100px;
    margin-bottom: 10px;
  }
  .van-form {
    width: 100%;
  }
}
</style>
