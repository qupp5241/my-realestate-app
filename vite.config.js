import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/my-realestate-app/', // この一行が重要なおまじないです！
  plugins: [react()],
})
