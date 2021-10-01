import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import { ViteAliases } from "vite-aliases";
import { qrcode } from 'vite-plugin-qrcode';

export default defineConfig({
  plugins: [reactRefresh(), ViteAliases(), qrcode()],
});