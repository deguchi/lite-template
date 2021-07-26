import { defineConfig } from 'vite'
const { resolve } = require('path')

// const locals = { name: "My Pug" }
const locals = {}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  server: { port: 3000 },
  publicDir: './src/',
  optimizeDeps: {
  },
  build: {
    outDir: 'build',
    rollupOptions: {
      // input: {
        // need a better way to template
        // main: resolve(__dirname, 'index.html'),
        // page: resolve(__dirname, 'pages/page.html'),
        // page2: resolve(__dirname, 'pages/page2.html'),
      // },
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`
      }
    },
  },
})
