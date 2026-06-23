import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// لازم يتطابق مع اسم الريبو (myweb)
export default defineConfig({
  plugins: [react()],
  base: '/mypersonalweb/',
})

