import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  if (command === 'serve') {
    return {
      base: '/',
      plugins: [vue()]
    }
  } else {
    // command === 'build'
    return {
      base: '/honkai-tools/',
      plugins: [vue()]
    }
  }
})
