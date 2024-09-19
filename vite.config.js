// vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue'; // Se usi Vue, cambialo per il framework che preferisci
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },

  plugins: [vue()],

  server: {
    port: 3000,        // Porta del server di sviluppo
    open: true,        // Apri automaticamente il browser
    proxy: {
      '/api': {
        target: 'http://localhost:4000', // Proxy per le richieste API
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    },
    hmr: {
      overlay: false,  // Disabilita l'overlay degli errori nel browser
    },
  },

  build: {
    outDir: 'dist',   // La directory di output per la build
    sourcemap: true,  // Abilita le mappe per il debug
  },
});