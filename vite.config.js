import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({

  server: {
    host: true,
    port: 8000,
  },
  preview: {

    host:true,
    port:8000
  },
  plugins: [vue()],
})
