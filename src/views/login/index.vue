<template>
  <div class="login-container">
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
import { ref, onMounted, reactive, computed, toRaw } from "vue";
import { useRouter } from "vue-router";
import { Login } from "@/api/interface";
import { UserStore } from "@/store/modules/user";
import md5 from "js-md5";

const router = useRouter();
const userStore = UserStore();
onMounted(() => {
  console.log(import.meta.env.VITE_BASE_URL);
});

const loginForm = reactive({
  username: "admin",
  password: "123456",
});
const onSubmit = (data: Login.ReqLoginForm) => {
  console.log("submit", data);
  userStore
    .login({ ...loginForm, password: md5(loginForm.password) })
    .then(() => {
      router.push("/home");
    });
};
</script>
<style lang="scss" scoped>
// $u-primary: #3c9cff;
.login-container {
  height: 100vh;
  background-color: #f7f8fa;
  padding: 0 10px;
  @include center();
  .van-form {
    width: 100%;
  }
}
</style>
