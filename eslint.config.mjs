import antfu from '@antfu/eslint-config';

export default antfu({
  type: 'app',
  typescript: true,
  formatters: true,
  stylistic: {
    indent: 2,
    semi: true,
    quotes: 'single',
  },
  ignores: [],
}, {
  rules: {
    'ts/consistent-type-definitions': ['error', 'type'],
    'no-console': ['off'],
    'antfu/no-top-level-await': ['off'],
    'node/prefer-global/process': ['off'],
    'perfectionist/sort-imports': ['error', {
      tsconfigRootDir: '.',
    }],
    'unicorn/filename-case': ['error', {
      case: 'kebabCase',
      ignore: ['README.md'],
    }],
  },
});
