// 基准大小
const baseSize = 37.5; //以postcss-pxtorem的rootValue为准
// 设置 rem 函数
export function setRem() {
  // 设计稿一般都是以375的宽度
  const scale = document.documentElement.clientWidth / 375;
  // 设置页面根节点字体大小（“Math.min(scale, 2)” 指最高放大比例为2，可根据实际业务需求调整）
  document.documentElement.style.fontSize =
    baseSize * Math.min(scale, 2) + "px";
}
