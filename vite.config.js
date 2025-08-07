import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base './' ensures assets work under https://<you>.github.io/<repo>/
export default defineConfig({ plugins: [react()], base: './' })

