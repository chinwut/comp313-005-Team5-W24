import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { mediapipe } from 'vite-plugin-mediapipe';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    mediapipe({
      'hands.js': [
        'VERSION', 
        'HAND_CONNECTIONS', 
        'Hands', 
      ],
    }),
  ],
  esbuild: {
    loader: 'jsx', // Treat .js files as .jsx
  },
})
