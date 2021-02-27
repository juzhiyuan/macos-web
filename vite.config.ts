import reactRefresh from '@vitejs/plugin-react-refresh';
import { resolve } from 'path';
import { babel } from '@rollup/plugin-babel';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    {
      ...babel({ babelHelpers: 'bundled' }),
      enforce: 'pre',
      apply: 'build',
    },
  ],
  build: {
    terserOptions: {
      mangle: {
        reserved: ['styled'],
      },
      parse: {},
      keep_fnames: true,
    },
    minify: 'terser',
  },
  esbuild: {
    jsxInject: `import React from 'react';`,
    minify: true,
  },
  resolve: {
    alias: {
      __: resolve(__dirname, './src'),
    },
  },
});
