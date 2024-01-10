<!-- 分页 -->
<template>
  <van-pagination
    v-model="currentPage"
    :total-items="total"
    :items-per-page="limit"
    @change="change"
  />
</template>

<script setup lang="ts">
import { computed } from "vue";
// 接受参数
interface Props {
  page?: number; // 当前页数
  limit?: number; // 每页条数
  total: number; // 总条数
}
const props = withDefaults(defineProps<Props>(), {
  page: 1,
  limit: 10,
});
// 定义emits
interface Emits {
  (e: "update:page", value: number): void;
  (e: "pagination", value: any): void;
}
const emit = defineEmits<Emits>();

const currentPage = computed({
  get() {
    return props.page;
  },
  set(newValue) {
    emit("update:page", newValue);
  },
});
/**
 * 翻页
 */
const change = () => {
  emit("pagination", { page: currentPage, limit: props.limit });
};
</script>

<style scoped lang="scss"></style>