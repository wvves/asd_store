import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@utils/hooks': path.resolve(__dirname, './src/utils/hooks'),
      '@utils/context': path.resolve(__dirname, './src/utils/context')

    }
  }
});
