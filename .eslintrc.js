module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: [
    'plugin:vue/essential',
  ],

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
  },

  parserOptions: {
    parser: 'babel-eslint',
  },

  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],

  extends: [
    'plugin:vue/recommended',
  ],
};
