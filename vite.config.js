import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteSSG } from 'vite-plugin-ssg';

export default defineConfig({
  plugins: [
    react(),
    ViteSSG({
      // Entry point to your app
      entry: 'src/main.jsx',
      // Define routes to be pre-rendered
      routes: ['/'],
    }),
  ],
});