// vitest.config.ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    exclude: ['**/*.spec.js'],
    environment: 'jsdom', // Use jsdom for testing DOM-based functionality
  },
})
