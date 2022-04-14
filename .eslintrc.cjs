/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript/recommended",
    "@vue/eslint-config-prettier"
  ],
  env: {
    "vue/setup-compiler-macros": true
  },
  rules: {
    "prettier/prettier": [
      "warn",
      {
        singleQuote: false,
        semi: false,
        trailingComma: "none"
      }
    ],
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
  },
  overrides: [
    {
      files: ["src/views/**/*.vue", "*.config.cjs"],
      rules: {
        "vue/multi-word-component-names": 0
      },
      env: {
        node: true
      }
    }
  ]
}
