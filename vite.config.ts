import { defineConfig } from 'vite'
import pugPlugin from "vite-plugin-pug"
const { resolve } = require('path')

const options = { pretty: true } // FIXME: pug pretty is deprecated!
// const locals = { name: "My Pug" }
const locals = {}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [pugPlugin(options, locals)],
  server: { port: 3000 },
  publicDir: 'assets',
  optimizeDeps: {
  },
  build: {
    rollupOptions: {
      input: {
        // need a better way to template
        main: resolve(__dirname, 'index.html'),
        // page: resolve(__dirname, 'pages/page.html'),
        // page2: resolve(__dirname, 'pages/page2.html'),
      },
    },
  },
})
