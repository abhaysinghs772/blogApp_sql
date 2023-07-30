import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env': {} // This is needed for compatibility with some libraries
  },
  plugins: [react()],
})
