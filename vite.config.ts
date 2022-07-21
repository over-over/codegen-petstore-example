import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@features': resolve(__dirname, 'src/features'),
      '@shared': resolve(__dirname, 'src/shared'),
      '@entities': resolve(__dirname, 'src/entities'),
      '@widgets': resolve(__dirname, 'src/widgets'),
      '@app': resolve(__dirname, 'src/app'),
      '@pages': resolve(__dirname, 'src/pages'),
      '@processes': resolve(__dirname, 'src/processes'),
    },
  },
  plugins: [react()],
});
