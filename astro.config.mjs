// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    defaultLocale: 'tr', // <--- ترکی زبان پیش‌فرض شد
    locales: ['tr', 'fa'], // <--- لیست زبان‌ها
    routing: {
      prefixDefaultLocale: false // آدرس روت (/) ترکی خواهد بود و آدرس (/fa) فارسی
    }
  }
});