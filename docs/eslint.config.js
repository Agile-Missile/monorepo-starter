import { base, defineConfig } from '@hyperse/eslint-config-hyperse';

export default defineConfig(
  [
    ...base,
    {
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unsafe-function-type': 'off',
        '@typescript-eslint/no-require-imports': 'off',
      },
    },
  ],
  ['**/preference', '**/*.mdx']
);
