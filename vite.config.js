import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {

  // When deployed to gh-pages the project serves from /honkai-tools/
  const base = (command === 'serve') ? '/' : '/honkai-tools/';

  return {
    base: base,
    plugins: [vue()],
    resolve: {
      alias: {
        vue: 'vue/dist/vue.esm-bundler.js',
      },
    },
  }
})
