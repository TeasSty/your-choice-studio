import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Project Pages: https://teassty.github.io/your-choice-studio/
export default defineConfig({
  plugins: [react()],
  base: '/your-choice-studio/',
})
