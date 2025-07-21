import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: './', // ou '/mon-sous-dossier/' si nécessaire lors du build
  plugins: [vue()],
})