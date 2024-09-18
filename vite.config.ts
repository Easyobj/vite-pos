import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vitePluginImp from "vite-plugin-imp";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginImp({
      libList: [
        {
          libName: "antd",
          style: (name:string) => `antd/es/${name}/style/index.less`,
        },
      ],
    }),
  ],
  define: {
    global: "window", // 添加这一行
  },
  css: {
    modules: {
      localsConvention: 'camelCase',
      generateScopedName: '[name]_[local]_[hash:base64:5]',
    },
    preprocessorOptions: {
      less: {
        modifyVars: {
          "@font-family": "Porsche Next",
          "@primary-color": "#d5001c", // 全局主色
          "@link-color": "#1890ff", // 链接色
          "@success-color": "#52c41a", // 成功色
          "@warning-color": "#faad14", // 警告色
          "@error-color": "#f5222d", // 错误色
          "@font-size-base": "16px", // 主字号
          "@text-color": "#000000", // 主文本色
          "@text-color-secondary": "#959899", // 次文本色
          "@disabled-color": "rgba(0, 0, 0, .25)", // 失效色
          "@border-radius-base": 0, // 组件/浮层圆角
          "@border-color-base": "#c8cacb", // 边框色
          "@table-header-bg": "#fff", //表头bg
          "@table-border-radius-base": "0px", //表格圆角
          "@table-row-hover-bg": "#EFF0F1", //表圆hover
          "@table-header-color": "#959899", //表头color
          "@pagination-item-bg-active": "#fff", //pagination
        },
        javascriptEnabled: true,
      },
      scss: {
        additionalData: `$env: ${process.env.NODE_ENV};`,
        quietDeps: true, // 添加这一行来忽略警告
      },
    },
  },
});
