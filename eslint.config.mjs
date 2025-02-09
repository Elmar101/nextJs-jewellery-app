import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import unusedImports from "eslint-plugin-unused-imports";
import prettierConfig from "eslint-config-prettier";
import eslintPluginPrettier from "eslint-plugin-prettier";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  prettierConfig,
  {
    plugins: {
      "unused-imports": unusedImports,
      prettier: eslintPluginPrettier,
    },
    rules: {
      // Lazımsız importları silmək üçün
      "unused-imports/no-unused-imports": "error",

      // İstifadə olunmayan dəyişənlərə xəbərdarlıq vermək üçün
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],

      // ESLint-in Prettier qaydaları ilə uyğun işləməsi üçün
      "prettier/prettier": "error",

      // TypeScript üçün əlavə qaydalar
      "@typescript-eslint/no-unused-vars": "off",
    },
    ignores: [".next/", "node_modules/"], // ESLint-in yoxlamayacağı qovluqlar
  },
];

export default eslintConfig;
