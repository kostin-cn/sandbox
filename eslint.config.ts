import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";


export default [
  {files: ["**/*.{js,mjs,cjs,ts,vue}"]},
  pluginJs.configs.recommended,
  ...pluginVue.configs["flat/essential"],
];