import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslintPlugin from 'vite-plugin-eslint';
import checker from 'vite-plugin-checker';
import VitePrettier from 'vite-plugin-prettier';

export default defineConfig({
  plugins: [
    react(),
    eslintPlugin(),
    checker({
      typescript: false,
      prettier: true,
    }),
    VitePrettier(),
  ],
});
