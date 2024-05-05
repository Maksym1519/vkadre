import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/vkadre/",
  resolve: {
    alias: {
      components: "/src/components",
      hooks: "/src/hooks",
      store: "/src/store",
      types: "/src/types",
      utils: "/src/utils",
      layouts: "/src/layouts",
      "@": path.resolve(__dirname,"src/styles"),
      "@mixins": path.resolve(__dirname,"src/styles/mixins/"),
      "@vars": path.resolve(__dirname,"src/styles/vars/"),
      "@assets": path.resolve(__dirname,"src/assets/fonts/"),
      "@img": path.resolve(__dirname,"src/assets/images/"),
    }
  }
})
