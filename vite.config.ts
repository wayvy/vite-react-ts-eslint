import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import { ViteAliases } from "vite-aliases";
import { qrcode } from 'vite-plugin-qrcode';
import Inspect from 'vite-plugin-inspect'

const generateConfig = () => {
  const ENV = {
    isZip: process.env.IS_ZIP === 'true',
    isProd: process.env.NODE_ENV === 'production',
    isDev: process.env.NODE_ENV === 'development',
  }

  console.info({ ENV });

  const assetsDir = ENV.isZip ? "" : "assets";
  const base = ENV.isZip ? './' : "/";

  const prodPlugins = [ViteAliases()];
  const devPlugins = [reactRefresh(), qrcode(), Inspect()];
  const plugins = ENV.isProd ? prodPlugins : [...prodPlugins, ...devPlugins];

  const sourcemap = ENV.isDev;

  return {
    build: {
      outDir: 'dist',
      assetsDir,
      sourcemap,
    },
    base,
      plugins,
  }
}

const config = generateConfig();
export default defineConfig(config);