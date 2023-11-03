// rollup.config.js
import typescript from "@rollup/plugin-typescript";
import { RollupOptions } from "rollup";
import ts from "typescript";
import resolve from "@rollup/plugin-node-resolve";

/**@type RollupOptions */
const config = {
  input: "src/index.ts",
  output: {
    file: "dist/bundle.js",
    format: "umd",
  },
  plugins: [
    resolve(),
    typescript({ typescript: ts, tsconfig: "./tsconfig.json" }),
  ],
};

export default config;
