/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePluginFonts } from 'vite-plugin-fonts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
        babel: {
          plugins: ["@emotion/babel-plugin"],
        },
      }),
    VitePluginFonts({
      google: {
        preconnect: true,
        families: ['Space Mono', 'Space Grotesk']
      },
      custom: {
        preload: true,
        families: [
          {
          name: 'Equinox Regular',
          local: 'Equinox Regular',
          src: './src/assets/fonts/Equinox Regular.woff'
        }
      ],
      },
    }),
  ],
  test: {
    globals: true,
    setupFiles: ['./setupTests.ts'],
    environment: 'jsdom',
    clearMocks: true,
  }
})
