import prefresh from '@prefresh/vite';
import { resolve } from 'path';
import { babel } from '@rollup/plugin-babel';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    prefresh(),
    {
      ...babel({ babelHelpers: 'bundled' }),
      enforce: 'pre',
      apply: 'build',
    },
  ],
  esbuild: {
    jsxInject: `import React from 'react';`,
    minify: true,
  },
  resolve: {
    alias: {
      __: resolve(__dirname, './src'),
      react: 'preact/compat',
      'react-dom': 'preact/compat',
    },
  },
});
