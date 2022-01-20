import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  // When deployed to gh-pages the project serves from /honkai-tools/
  const base = command === "serve" ? "/" : "/honkai-tools/";

  return {
    base: base,
    plugins: [vue()],
    css: {
      postcss: {
        plugins: [
          {
            postcssPlugin: "internal:charset-removal",
            AtRule: {
              charset: (atRule) => {
                if (atRule.name === "charset") {
                  atRule.remove();
                }
              },
            },
          },
        ],
      },
    },
    resolve: {
      alias: {
        vue: "vue/dist/vue.esm-bundler.js",
      },
    },
  };
});
