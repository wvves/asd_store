import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@utils/hooks': path.resolve(__dirname, './src/utils/hooks'),
      '@utils/context': path.resolve(__dirname, './src/utils/context'),
      '@ui/fields': path.resolve(__dirname, './src/ui/fields'),
      '@ui/buttons': path.resolve(__dirname, './src/ui/buttons')
    }
  }
});
