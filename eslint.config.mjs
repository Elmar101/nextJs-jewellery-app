import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import unusedImportsPlugin from "eslint-plugin-unused-imports";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    plugins: {
      unusedImports: unusedImportsPlugin,
    },
    ...compat.config({
      extends: ['next/core-web-vitals', 'next/typescript'],
      rules: {
        "unused-imports/no-unused-imports": "error",
        "unused-imports/no-unused-vars": [
          "warn",
          {
            vars: "all",
            varsIgnorePattern: "^_",
            args: "after-used",
            argsIgnorePattern: "^_",
          },
        ],
        "prettier/prettier": "error",
        "@typescript-eslint/no-unused-vars": "off",
      },
      // ignores: [".next/", "node_modules/"], // flat config-da ignores burada olmaz, .eslintignore istifadə et
    }),
  },
];

export default eslintConfig;
