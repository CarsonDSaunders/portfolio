/// <reference types="vitest" />
/// <reference types="vite/client" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';

// https://vitejs.dev/config/
// eslint-disable-next-line import/no-unused-modules
export default defineConfig({
  envDir: './env',
  plugins: [react(), tsconfigPaths(), svgrPlugin()],
  assetsInclude: ['**/*.md'],
  /* If proxy is needed
  server: {
    proxy: {
      "/api": "localhost:8080"
    }
  },
  */
  build: {
    sourcemap: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    // you might want to disable it, if you don't have tests that rely on CSS
    // since parsing CSS is slow
    css: true,
  },
});
