module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    // 'vue',
    // 'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:vue/recommended'
  ],
  plugins: [
    "import",
    "vue"
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        mocha: true
      }
    }
  ]
}
