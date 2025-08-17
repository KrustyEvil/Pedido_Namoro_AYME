import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Projeto_Pedido_Namoro_Avan-ado/',
  build: {
    outDir: 'docs',
    assetsDir: './',  // Isso coloca os assets na raiz da pasta docs
    rollupOptions: {
      output: {
        assetFileNames: '[name].[ext]'  // Mantém os nomes originais dos arquivos
      }
    }
  }
})