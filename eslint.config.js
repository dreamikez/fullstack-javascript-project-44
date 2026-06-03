import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // Игнорируем служебные файлы и папки
  {
    ignores: [
      "node_modules/",
      ".git/",
      ".github/",
      "dist/",
      "build/",
      "coverage/",
      "*.min.js",
      "*.md",
      "Makefile",
      ".gitignore",
      "sonar-project.properties"
    ]
  },
  
  // Настройки для JS файлов
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: globals.node
    }
  }
]);