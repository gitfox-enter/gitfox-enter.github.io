// @ts-check
import eslintPluginAstro from 'eslint-plugin-astro'
import { defineConfig } from "eslint/config";

export default defineConfig([
  ...eslintPluginAstro.configs.recommended,
  {
    ignores: ['public/scripts/*', '.astro/', 'src/env.d.ts'],
    rules: {}
  }
])
