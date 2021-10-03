import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import { ViteAliases } from "vite-aliases";
import { qrcode } from 'vite-plugin-qrcode';
import Inspect from 'vite-plugin-inspect'

export default defineConfig({
  plugins: [reactRefresh(), ViteAliases(), qrcode(), Inspect()],
});