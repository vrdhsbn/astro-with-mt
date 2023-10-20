import { defineConfig } from 'astro/config'

import react from '@astrojs/react'
import pandacss from '@pandacss/astro'

// https://astro.build/config
export default defineConfig({
  build: {
    format: 'file',
  },
  server: {
    open: true,
  },
  integrations: [react(), pandacss()],
})
