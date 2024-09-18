import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vitePluginImp from 'vite-plugin-imp';
export default defineConfig({
  plugins: [
    react(),
    vitePluginImp({
      libList: [
        {
          libName: 'antd',
          style: (name) => {
            if (['col', 'row'].includes(name)) {
              return 'antd/lib/style/index.js';
            }
            return `antd/es/${name}/style/index.js`;
          },
        },
      ],
    }),
  ],
  define: {
    global: 'window', // 添加这一行
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'antd-vendor': ['antd'],
        },
      },
    },
    target: 'esnext',
    outDir: 'build',
    chunkSizeWarningLimit: 1000,
    assetsInlineLimit: 3072,
  },
  css: {
    modules: {
      localsConvention: 'camelCase',
      generateScopedName: '[name]_[local]_[hash:base64:5]',
    },
    preprocessorOptions: {
      less: {
        modifyVars: {
          '@font-family': 'Porsche Next',
          '@primary-color': '#d5001c',
          '@link-color': '#1890ff',
          '@success-color': '#52c41a',
          '@warning-color': '#faad14',
          '@error-color': '#f5222d',
          '@font-size-base': '16px',
          '@text-color': '#000000',
          '@text-color-secondary': '#959899',
          '@disabled-color': 'rgba(0, 0, 0, .25)',
          '@border-radius-base': 0,
          '@border-color-base': '#c8cacb',
          '@table-header-bg': '#fff',
          '@table-border-radius-base': '0px',
          '@table-row-hover-bg': '#EFF0F1',
          '@table-header-color': '#959899',
          '@pagination-item-bg-active': '#fff',
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
