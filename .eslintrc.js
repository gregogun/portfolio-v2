module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'prettier/react'
  ],
  plugins: ['react', 'import', 'jsx-a11y'],
  rules: {
    'no-console': 1,
    'no-unused-vars': 1,
    'react/prop-types': [
      'enabled',
      { ignore: 'ignore', customValidators: 'customValidator' }
    ]
  },
  env: {
    jest: true,
    es6: true,
    browser: true,
    node: true
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  }
};
