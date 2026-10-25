import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// base: './' — удобно для GitHub Pages / любой подпапки
export default defineConfig({
  plugins: [react()],
  base: './',
})
