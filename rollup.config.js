// import typescript from "@rollup/plugin-typescript";
import vue from "rollup-plugin-vue";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import commonjs from "@rollup/plugin-commonjs";
import packageJson from "./package.json";

export default {
  input: "src/index.ts",
  output: [
    {
      format: "cjs",
      file: packageJson.main,
      sourcemap: true
    },
    {
      format: "esm",
      file: packageJson.module,
      sourcemap: true
    }
  ],
  external: ["vue", "vue-class-component", "vue-property-decorator"],
  plugins: [
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    vue()
  ]
};
