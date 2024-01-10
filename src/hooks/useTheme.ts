import type { ConfigProviderThemeVars, ConfigProviderTheme } from "vant";
import { computed, watch, reactive } from "vue";
import { useAppStore } from '@/store/modules/app'

export function useTheme() {
  const appStore = useAppStore()

  const isDark = computed(() => {
    return appStore.theme === 'dark'
  });

  const theme = computed<ConfigProviderTheme>(() => {
    return isDark.value ? 'dark' : 'light';
  });

  const themeVars = reactive<ConfigProviderThemeVars>({});

  watch(
    () => isDark.value,
    (dark) => {
      if (dark) document.documentElement.classList.add("dark");
      else document.documentElement.classList.remove("dark");
    },
    { immediate: true }
  );

  return { theme, themeVars };
}
