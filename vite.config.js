import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/myweb/', // لازم يتطابق مع اسم الريبو
})
