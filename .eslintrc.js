// npm packages needed:

module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
    "prettier/react",
  ],
  plugins: ["react", "jsx-a11y"],
  rules: {
    "no-console": "warn",

    // react plugin - options
    "react/prop-types": 0,
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 8, // optional, recommended 6+
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
}
