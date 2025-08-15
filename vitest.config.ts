import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/Tests/setup',
        coverage: {
            provider: 'v8',
            thresholds: {                  // optional: fail build if below
                statements: 80,
                branches: 70,
                functions: 80,
                lines: 80,
            },
        }
    }
})