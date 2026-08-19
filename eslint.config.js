import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import betterTailwindcss from "eslint-plugin-better-tailwindcss";
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default tseslint.config(
  // 1. Target files and inject environment globals
  {
    files: ["**/*.{js,ts,vue}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },

  // 2. Base JS Recommended Config
  js.configs.recommended,

  // 3. TypeScript Rules
  ...tseslint.configs.recommended,

  // 4. Vue Rules (Enforces Vue 3 recommended standards)
  ...pluginVue.configs["flat/recommended"],
  skipFormatting,

  // 5. Override Vue parser to play nicely with TypeScript
  {
    files: ["**/*.vue"],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
      },
    },
  },

  // 6. Tailwind CSS v4 Rules
  {
    plugins: {
      "better-tailwindcss": betterTailwindcss,
    },
  }
);
