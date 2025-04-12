import next from 'eslint-config-next';

export default [
  next(),
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      'react/no-unescaped-entities': 'off',
      'react/jsx-key': 'warn',
    },
  },
];
