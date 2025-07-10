import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({

  server: {
    proxy: {
      "/api" : "http://localhost:3000" 
      // now we have use proxying now for server request is comong from this url and not 5173(vite) so no cors error
    }
  },

  plugins: [react()],
})
