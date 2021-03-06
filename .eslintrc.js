module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  settings: {
    react: {
      version: "detect"
    }
  },
  ignorePatterns: ["build", "node_modules"],
  env: {
    browser: true,
    node: true,
    es6: true
  },
  overrides: [
    {
      files: ["**/*.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off"
      }
    }
  ],
  plugins: ["@typescript-eslint", "react"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    sourceType: "module" // Allows for the use of imports
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off'
  }
};
