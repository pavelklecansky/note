import react from '@vitejs/plugin-react';
import path from "path";
import type {UserConfigFn} from 'vite';
import {overrideVaadinConfig} from './vite.generated';

const customConfig: UserConfigFn = (env) => ({
    // Here you can add custom Vite parameters
    // https://vitejs.dev/config/
    plugins: [
        react({
            include: '**/*.tsx',
        }),
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./frontend"),
        },
    },
});

export default overrideVaadinConfig(customConfig);
