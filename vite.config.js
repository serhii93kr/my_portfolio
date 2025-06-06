import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [vue()],
});

