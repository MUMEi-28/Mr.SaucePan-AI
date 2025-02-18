import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Mr.SaucePan-AI",
  define: {
    'process.env.VITE_APP_AI': JSON.stringify(process.env.VITE_APP_AI)
  }
})
