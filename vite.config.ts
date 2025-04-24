import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/',
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: undefined,
        assetFileNames: (assetInfo) => {
          if (assetInfo.name) {
            if (/\.(gif|jpe?g|png|svg)$/.test(assetInfo.name)) {
              return 'assets/images/[name]-[hash][extname]';
            }
            if (/\.(pdf)$/.test(assetInfo.name)) {
              return 'assets/[name]-[hash][extname]';
            }
          }
          return 'assets/[name]-[hash][extname]';
        }
      }
    }
  },
  server: {
    historyApiFallback: true
  }
});
