export default [
    {
      files: ["**/*.js", "**/*.jsx"],
      languageOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
      rules: {
        "no-console": "warn",
        "no-unused-vars": "warn",
      },
    },
  ];
  