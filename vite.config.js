import { defineConfig } from 'vite';

export default defineConfig({
  root: '.', // Define a raiz do projeto como a pasta atual
  server: {
    port: 8080, // Define a porta do servidor
  },
  build: {
    outDir: 'dist', // Pasta onde os arquivos finais serão gerados
  }
});
