import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Projeto_Pedido_Namoro_Avan-ado/' // Adicione esta linha
})