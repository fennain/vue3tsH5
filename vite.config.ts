import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import { VantResolver } from "unplugin-vue-components/resolvers";
import path from "path";
import postcssImport from "postcss-pxtorem";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "*": path.resolve(""),
    },
  },
  // 适配
  css: {
    postcss: {
      plugins: [
        postcssImport({
          // 这里的rootValue就是你的设计稿大小
          rootValue: 37.5,
          propList: ["*"],
          minPixelValue: 2,
        }),
      ],
    },
    preprocessorOptions: {
      // 导入scss预编译程序
      scss: {
        additionalData: `@use "@/style.scss" as *;`,
      },
    },
  },
  server: {
    // 服务器主机名，如果允许外部访问，可设置为 "0.0.0.0"
    host: "0.0.0.0",
    port: 3301,
    open: true,
    cors: true,
    // 跨域代理配置
    // proxy: {
    //   "/api": {
    //     target: "https://mock.mengxuegu.com/mock/629d727e6163854a32e8307e", // easymock
    //     // target: "https://www.fastmock.site/mock/f81e8333c1a9276214bcdbc170d9e0a0", // fastmock
    //     changeOrigin: true,
    //     rewrite: path => path.replace(/^\/api/, "")
    //   }
    // }
  },
});
