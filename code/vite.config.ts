/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import dns from 'dns'
import commonjs from 'vite-plugin-commonjs'
import react from '@vitejs/plugin-react'

dns.setDefaultResultOrder('verbatim')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    commonjs({
      filter(id) {
        if (id.includes('mock/api')) {
          return true
        }
      }
    })
  ],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@test', replacement: '/test' }
    ]
  },
  server: {
    watch: {
      usePolling: true
    },
    host: true,
    strictPort: true,
    port: 3000
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './test/setup.ts',
    coverage: {
      enabled: true,
      provider: 'v8',
      reporter: ['text', 'json', ['html', { subdir: 'coverage' }]],
      functions: 85,
      branches: 85,
      lines: 85,
      statements: 85
    }
  }
})
