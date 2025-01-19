module.exports = {
  extends: ["@cybozu/eslint-config/presets/react-typescript-prettier"],
  env: {
    node: true,
  },
  plugins: ["import"],
  rules: {
    // define import rules
    "import/order": [
      "error",
      // the order of import is sorted as follows:
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        "newlines-between": "always",
      },
    ],
  },
};
