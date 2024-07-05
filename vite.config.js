import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    host: '0.0.0.0',
    port: 7121,
    strictPort: true,
    proxy: {
      '/drf': {
        target: 'http://192.168.1.11:7120',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/drf/, '')
      }
    }
  }
})