module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:i18next/recommended',
    'plugin:storybook/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'i18next', 'react-hooks'],
  rules: {
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    indent: [2, 2],
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.js', '.jsx', '.tsx'],
      },
    ],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'react/function-component-definition': 'off',
    'no-shadow': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-underscore-dangle': 'off',
    'object-curly-newline': 'off',
    'react/button-has-type': 'off',
    'implicit-arrow-linebreak': 'off',
    'linebreak-style': 0,
    'operator-linebreak': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-quotes': [2, 'prefer-single'],
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'error', // Checks effect
    'no-param-reassign': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-undef': 'off',
    'i18next/no-literal-string': [
      'error',
      {
        markupOnly: true,
        onlyAttribute: [' '],
      },
    ],
    'max-len': [
      'error',
      {
        ignoreComments: true,
        code: 120,
      },
    ],
  },
  globals: {
    __IS_DEV__: true,
    __API__: true,
    __PROJECT__: true,
  },
  overrides: [
    {
      files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off',
        'max-len': 'off',
      },
    },
  ],
};
