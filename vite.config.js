import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 4000, 
    rollupOptions: {
      output: {
        // Ручная настройка разделения чанков
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Отделяем тяжелый framer-motion
            if (id.includes('framer-motion')) {
              return 'framer-motion';
            }
            // Отделяем библиотеки переводов
            if (id.includes('i18next') || id.includes('react-i18next')) {
              return 'i18n';
            }
            // Отделяем сам React
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
              return 'react-vendor';
            }
            // Все остальное в общий vendor файл
            return 'vendor';
          }
        },
      },
    },
  },
})
