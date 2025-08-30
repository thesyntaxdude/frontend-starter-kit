import js from '@eslint/js';
import globals from 'globals';
import json from '@eslint/json';
import css from '@eslint/css';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.browser },
    rules: {
      eqeqeq: 'error', // require === instead of ==
      'no-unused-vars': 'warn', // warn about unused variables
      'prefer-const': 'warn', // suggest const over let when possible
      'no-console': 'off', // allow console.log while I'm learning
    },
  },
  {
    files: ['**/*.json'],
    plugins: { json },
    language: 'json/json',
    extends: ['json/recommended'],
  },
  {
    files: ['**/*.css'],
    plugins: { css },
    language: 'css/css',
    extends: ['css/recommended'],
  },
]);
