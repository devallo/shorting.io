module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    'plugin:prettier/recommended',
    '@vue/prettier',
    'plugin:vue-i18n/recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    'vue-i18n/no-dynamic-keys': 'error',
    'vue-i18n/no-unused-keys': [
      'error',
      {
        extensions: ['.js', '.vue']
      }
    ]
  },
  settings: {
    'vue-i18n': {
      localeDir: './src/locales/*.json' // extention is glob formatting!
    }
  }
}
