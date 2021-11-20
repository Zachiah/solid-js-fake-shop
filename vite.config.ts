import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import windicss from "vite-plugin-windicss";

export default defineConfig({
  plugins: [windicss(),solidPlugin()],
  build: {
    target: "esnext",
    polyfillDynamicImport: false,
  },
});
