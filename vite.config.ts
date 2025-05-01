import { defineConfig, Plugin } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"

function apiReplace(): Plugin {
  return {
    name: "api-replace",
    apply: "build",
    transform(code, id) {
      if (!id.match(/\.(ts|js|tsx|jsx)$/)) return
      return code.replace(
        /(['"`])\/api([^"'`\\]*)\1/g,
        (_, quote, apiPath) => `${quote}https://dummyjson.com${apiPath}${quote}`,
      )
    },
  }
}

export default defineConfig(({ command }) => {
  const base = command === "build" ? "/front_5th_chapter2-3/" : "/"
  return {
    base,
    plugins: [react(), apiReplace()],
    resolve: {
      alias: {
        "@app": path.resolve(__dirname, "src/app"),
        "@pages": path.resolve(__dirname, "src/pages"),
        "@widgets": path.resolve(__dirname, "src/widgets"),
        "@features": path.resolve(__dirname, "src/features"),
        "@entities": path.resolve(__dirname, "src/entities"),
        "@shared": path.resolve(__dirname, "src/shared"),
      },
    },
    server: {
      proxy: {
        "/api": {
          target: "https://dummyjson.com", // ✅ 개발 환경에서는 proxy로 처리
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
  }
})
