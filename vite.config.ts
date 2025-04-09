import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import qiankun from "vite-plugin-qiankun";
import { resolve } from "path";

export default defineConfig(() => {
  return {
    base: "/subapp/app1",
    server: {
      cors: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    },
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
      },
    },
    plugins: [
      vue(),
      qiankun("app1", {
        useDevMode: true,
      }),
    ],
  };
});
