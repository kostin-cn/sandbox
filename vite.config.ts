import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  base: '/sandbox/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    ...(process.env.NODE_ENV === 'development' && {
      proxy: {
        '/api': {
          target: 'https://organizationoffice.com',
          changeOrigin: true
        }
      }
    })
  }
})
