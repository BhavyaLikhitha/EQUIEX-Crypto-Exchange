import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      strategies: 'generateSW',
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: "Equiex",
        short_name: "Equiex",
        description: "A crypto exchange app.",
        start_url: "./",
        display: "standalone",
        background_color: "#FFFFFF",
        theme_color: "#cb6ce6",
        icons: [
          {
            src: "/assets/manifest-icon-192.maskable.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/assets/manifest-icon-192.maskable.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "/assets/manifest-icon-512.maskable.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/assets/manifest-icon-512.maskable.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
      workbox: {
        runtimeCaching: [
          // Cache static assets
          {
            urlPattern: ({ url }) => url.pathname.includes('assets'),
            handler: 'NetworkFirst',
            // handler: 'CacheFirst',
            method: 'GET',
            options: {
              cacheName: 'static-assets',
              expiration: {
                maxAgeSeconds: 2592000, // 30 days
                maxEntries: 100,
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          // Cache frontend routes
          {
            urlPattern: ({ url }) => {
              const routes = [
                '/',
                '/markets',
                '/coins/:id',
                '/trade/bitcoin',
                '/portfolio',
                '/signup',
                '/login',
                '/coin-tracker',
                '/settings',
                '/rewards',
              ];
              return routes.some((route) =>
                new RegExp(route.replace(/:id/, '[^/]+')).test(url.pathname)
              );
            },
            // handler: 'CacheFirst', // For dynamic pages
            handler:'NetworkFirst',
            method: 'GET',
            options: {
              cacheName: 'dynamic-pages',
              expiration: {
                maxAgeSeconds: 2592000, // 30 days
                maxEntries: 1000,
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          // Cache backend API calls
          {
            urlPattern: ({ url }) => {
              return url.pathname.startsWith('/users') ||
                     url.pathname.startsWith('/portfolio') ||
                     url.pathname.startsWith('/tracker');
            },
            handler: 'NetworkFirst',
            method: 'GET',
            options: {
              cacheName: 'api-calls',
              expiration: {
                maxAgeSeconds: 2592000, // 30 day
                maxEntries: 1000,
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
    }),
  ],
  server: {
    port: 3000,
  },
  optimizeDeps: {
        exclude: ['problematic-dependency-1', 'problematic-dependency-2'],
      },
});
