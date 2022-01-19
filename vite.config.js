import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/vue-guided-tour/',
  build: {
    outDir: 'docs'
  },
  plugins: [vue()]
})
