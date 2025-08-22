import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/My_WebSite/',  // مهم جداً يكون نفس اسم الريبو
})
