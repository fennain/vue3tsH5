import { h } from 'vue'
import SvgIconLocal from '@/components/SvgIconLocal/index.vue'

export const useIconRenderLocal = () => {
  interface IconConfig {
    name: string
    color?: string
    fontSize?: number
  }

  interface IconStyle {
    color?: string
    fontSize?: string
  }

  const iconRenderLocal = (config: IconConfig) => {
    const { color, fontSize, name } = config

    const style: IconStyle = {}

    if (color)
      style.color = color

    if (fontSize)
      style.fontSize = `${fontSize}px`

    if (!name)
      window.console.warn('iconRender: icon is required')

    return () => h(SvgIconLocal, { name, style })
  }

  return {
    iconRenderLocal,
  }
}
