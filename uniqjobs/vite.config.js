// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

// export default defineConfig({
//   base: import.meta.env.VITE_BASE_PATH || '/uniqjobs/',
//   plugins: [react(),tailwindcss()],
// })



import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import process from 'process'

export default defineConfig(({ mode }) => {
  // Load environment variables based on the current mode (development, production, etc.)
  const env = loadEnv(mode, process.cwd())

  return {
    base: env.VITE_BASE_PATH || '/uniqjobs/',
    plugins: [react(), tailwindcss()],
  }
})
