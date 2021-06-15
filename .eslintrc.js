module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:jest-dom/recommended',
    'prettier',
    'prettier/react'
  ],
  plugins: ['react', 'import', 'jsx-a11y', 'jest-dom', 'testing-library'],
  rules: {
    'no-console': 1,
    'no-unused-vars': 1,
    'react/prop-types': [
      'enabled',
      { ignore: 'ignore', customValidators: 'customValidator' }
    ]
  },
  overrides: [
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react']
    }
  ],
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
