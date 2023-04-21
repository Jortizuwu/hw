module.exports = {
  root: true,
  env: {
    node: true,
    commonjs: true,
    es2021: true,
  },
  overrides: [],
  parserOptions: {
    ecmaVersion: 2020,
  },
  extends: '@react-native-community',
  plugins: ['prettier'],
  rules: {
    semi: ['error', 'never'],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false,
      },
    ],
  },
}
