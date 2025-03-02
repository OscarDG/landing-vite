import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/landing-vite/",
  build: {
    rollupOptions: {
      imput: {
        home: resolve(__dirname, 'index.html'),
        store: resolve(__dirname, 'store/index.html')
      }
    }
  }
});

