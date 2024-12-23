import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [dts()],
    server: {
        host: true,
    },
    resolve: {},
    build: {
        lib: {
            entry: `${__dirname}/src/index.ts`,
            name: 'index',
            formats: ['cjs', 'es'],
            fileName: 'index',
        },
        rollupOptions: {
            external: [
                'node_modules',
                'out',
                '.next',
                'bower_components',
                'jspm_packages',
                '**/*.stories.tsx',
                '**/*.test.ts',
                '**/*.test.tsx',
                '**/*.spec.ts',
                '**/*.spec.tsx',
            ],
        },
    },
})
