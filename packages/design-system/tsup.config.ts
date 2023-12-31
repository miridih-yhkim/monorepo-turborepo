import { defineConfig } from "tsup";
import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";

export default defineConfig((options) => ({
  banner: {
    js: '"use client"',
  },
  entry: ["src/index.ts"],
  format: ["esm"],
  target: ["chrome91", "firefox90", "edge91", "safari15"],
  dts: false,
  clean: true,
  outDir: "dist",
  bundle: true,
  external: ["react", "react-dom"],
  esbuildPlugins: [
    vanillaExtractPlugin({
      identifiers: (props) => props.hash,
    }),
  ],
  ...options,
}));
