import { h } from 'vue'
import SvgIcon from '@/components/SvgIcon/index.vue'

export const useIconRender = () => {
  interface IconConfig {
    name: string
    color?: string
    fontSize?: number
  }

  interface IconStyle {
    color?: string
    fontSize?: string
  }

  const iconRender = (config: IconConfig) => {
    const { color, fontSize, name } = config

    const style: IconStyle = {}

    if (color)
      style.color = color

    if (fontSize)
      style.fontSize = `${fontSize}px`

    if (!name)
      window.console.warn('iconRender: icon is required')

    return () => h(SvgIcon, { name, style })
  }

  return {
    iconRender,
  }
}
