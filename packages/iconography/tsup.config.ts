import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  banner: {
    js: '"use client"',
  },
  entry: ["src/index.ts", "src/generated/*.ts"],
  format: ["esm", "cjs"],
  target: ["chrome91", "firefox90", "edge91", "safari15"],
  dts: false,
  clean: true,
  outDir: "dist",
  bundle: true,
  ...options,
}));
