import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";
import { onMounted, ref, onUnmounted, computed } from 'vue'

export function useBasicLayout() {
  const breakpoints = useBreakpoints(breakpointsTailwind);
  const isMobile = breakpoints.smaller("sm");
  const isIpad = breakpoints.smaller("lg");

  return { isMobile, isIpad };
}

// dom宽度
export function setDomWidth() {
  // 基准大小
  const baseSize = 37.5; //以postcss-pxtorem的rootValue为准
  // console.log("setDomWidth");
  const breakpoints = useBreakpoints(breakpointsTailwind);
  const isMobile = breakpoints.smaller("sm");
  const clientHeight = document.documentElement.clientHeight;

  let DomWidth = document.documentElement.clientWidth;
  if (isMobile.value) {
    document.documentElement.style.width = "100%";
    // document.documentElement.style.height = "100%";
  } else {
    document.documentElement.style.width = (750 * clientHeight) / 1334 + "px";
    DomWidth = (750 * clientHeight) / 1334;
    // document.documentElement.style.width = "375px";
    // document.documentElement.style.height = "667px";
  }

  // 设计稿一般都是以375的宽度
  const scale = DomWidth / 375;
  // 设置页面根节点字体大小（“Math.min(scale, 2)” 指最高放大比例为2，可根据实际业务需求调整）
  document.documentElement.style.fontSize = baseSize * scale + "px";
  return DomWidth;
}

/**
 * @description dom宽度
 * */
export const useDomWidth = () => {
  const domWidth = ref(document.documentElement.clientWidth);
  const getWidth = () => {
    domWidth.value = setDomWidth();
  };

  getWidth()

  onMounted(() => {
    // 开始监听网络状态的变化
    window.addEventListener("resize", getWidth);
  });

  onUnmounted(() => {
    // 移除监听网络状态的变化
    window.removeEventListener("resize", getWidth);
  });

  return { domWidth };
};