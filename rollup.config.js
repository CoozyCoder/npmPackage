import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";

export default defineConfig({
  input: "src/index.ts",
  output: {
    dir: "dist",
    format: "esm",
    name: "jahangir-pkg",
  },
  external: ["react", "react-dom"], //for adding the dependent libraries
  plugins: [typescript({ tsconfig: "tsconfig.json" })],
});
