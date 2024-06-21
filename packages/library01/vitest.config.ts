import { swcUnpluginTs } from 'swc-unplugin-ts';
import tsConfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [tsConfigPaths(), swcUnpluginTs.vite({})],
  resolve: {
    // https://github.com/aleclarson/vite-tsconfig-paths/issues/54
    alias: [
      // handle `@/*.js`, Do not use this alias, causeof `https://github.com/dividab/tsconfig-paths/pull/213` has been fixed.
      // { find: /^(@\/.*)\.js$/, replacement: '$1.ts' },
    ],
  },
  cacheDir: '../../.cache/vitest/forge',
  test: {
    // Makebe suite for local debug
    testTimeout: 50000000,
    globals: true,
    environment: 'node',
    passWithNoTests: false,
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'clover'],
      extension: ['js', 'jsx', 'ts', 'tsx'],
    },
    exclude: [
      '**/node_modules/**',
      'dist/**',
      '**/coverage/**',
      '**/.{idea,git,cache,output,temp}/**',
    ],
  },
});
