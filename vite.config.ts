import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import { ViteAliases } from "vite-aliases";

export default defineConfig({
  plugins: [reactRefresh(), ViteAliases()],
});