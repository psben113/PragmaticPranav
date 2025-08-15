import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/Tests/setup',
        coverage: {
            provider: 'v8',         // or 'istanbul'
            thresholds: {           // optional: fail build if below
                statements: 80,
                branches: 70,
                functions: 80,
                lines: 80,
            },
            exclude: [
                // Defaults
                '**/node_modules/**', '**/dist/**', '**/cypress/**', '**/.{idea,git,cache,output,temp}/**',
                '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build,eslint,prettier}.config.*',
                './src/vite-env.d.ts',
                // Components
                './src/Components/Index.tsx',
                './src/Components/App.tsx'
            ]
        }
    }
})