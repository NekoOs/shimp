import vuePlugin from 'eslint-plugin-vue'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import vueParser from 'vue-eslint-parser'

export default [
  // Lint for .vue files
  {
    files: ['src/**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        ecmaVersion: 2020,
        sourceType: 'module',
        extraFileExtensions: ['.vue']
      },
      globals: {
        defineProps: 'readonly',
        defineEmits: 'readonly',
        defineExpose: 'readonly',
        withDefaults: 'readonly'
      }
    },
    plugins: {
      vue: vuePlugin,
      '@typescript-eslint': tsPlugin
    },
    rules: {
      'vue/component-definition-name-casing': ['error', 'PascalCase'],
      'vue/component-name-in-template-casing': ['error', 'PascalCase'],
      'vue/multi-word-component-names': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'no-console': 'off',
      'no-debugger': 'off',
      'semi': ['error', 'never'],
      'quotes': ['error', 'single'],
      'comma-dangle': ['error', 'never'],
      'arrow-parens': ['error', 'always'],
      'no-trailing-spaces': 'error',
      'eol-last': ['error', 'always'],
      'indent': ['error', 2, { SwitchCase: 1 }],
      'object-curly-spacing': ['error', 'always'],
      'no-multiple-empty-lines': ['error', { max: 1 }]
    }
  },

  // Lint for .ts files
  {
    files: ['src/**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module'
      }
    },
    plugins: {
      '@typescript-eslint': tsPlugin
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'no-console': 'off',
      'no-debugger': 'off',
      'semi': ['error', 'never'],
      'quotes': ['error', 'single'],
      'comma-dangle': ['error', 'never'],
      'arrow-parens': ['error', 'always'],
      'no-trailing-spaces': 'error',
      'eol-last': ['error', 'always'],
      'indent': ['error', 2, { SwitchCase: 1 }],
      'object-curly-spacing': ['error', 'always'],
      'no-multiple-empty-lines': ['error', { max: 1 }]
    }
  }
]
