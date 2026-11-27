import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

// GitHub Pages のサブパス（例: /botamochi-hp/）。独自ドメインなら "/"。
// GitHub Actions からは BASE_PATH 環境変数で渡される。
const base = process.env.BASE_PATH || "/";

export default defineConfig({
  base,
  define: {
    // React Router の basename（末尾スラッシュなし）
    __BASE_PATH__: JSON.stringify(base.replace(/\/$/, "")),
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});
