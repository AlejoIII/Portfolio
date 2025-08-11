import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// If deploying to a project page like https://user.github.io/repo/,
// set base: '/repo/'.
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE || '.', 
})
