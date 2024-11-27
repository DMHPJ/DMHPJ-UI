import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['cjs', 'es']
    },
    rollupOptions: {
      external: ['vue']
    }
  },
  plugins: [
    vue(),
    dts({ insertTypesEntry: true, copyDtsFiles: false })
  ]
})