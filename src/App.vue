<script setup lang="ts">
import { useTheme } from '@/hooks/useTheme'

const { theme, themeVars } = useTheme()

</script>

<template>
  <VanConfigProvider class="h-full" :theme="theme" :theme-vars="themeVars">
    <RouterView />
  </VanConfigProvider>
</template>

