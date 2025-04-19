import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import pandaPostCSS, { type PluginOptions } from '@pandacss/dev/postcss'
import type { PluginCreator } from 'postcss'

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [pandaPostCSS as PluginCreator<PluginOptions>],
    },
  },
})
