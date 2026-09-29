import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repositoryBase = process.env.SINOIKIA_BASE_PATH ?? '/sinoikia/'

export default defineConfig({
  plugins: [react()],
  base: repositoryBase,
  build: {
    sourcemap: true,
  },
})
