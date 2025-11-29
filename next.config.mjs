/** @type {import('next').NextConfig} */
import withPWAInit from "next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  register: true,
  skipWaiting: true,
  // Tetap disable di dev biar lu gak pusing kena cache pas ngoding
  disable: process.env.NODE_ENV === "development",
  
  // --- INI KUNCI OFFLINE-NYA ---
  runtimeCaching: [
    // 1. Cache untuk API (Cards, Decks, Skills)
    {
      urlPattern: /\/api\/.*/i, 
      handler: "NetworkFirst", // Coba internet dulu, kalau mati baru ambil cache
      options: {
        cacheName: "api-data",
        expiration: {
          maxEntries: 50, // Simpan max 50 request terakhir
          maxAgeSeconds: 24 * 60 * 60, // Simpan selama 24 jam
        },
        networkTimeoutSeconds: 10, // Kalau internet lemot > 10dtk, ambil cache aja
      },
    },
    // 2. Cache untuk Gambar (Kartu & Ikon)
    {
      urlPattern: /\.(?:png|jpg|jpeg|svg|webp|gif)$/i,
      handler: "StaleWhileRevalidate", // Tampilkan cache dulu biar cepet, sambil update di background
      options: {
        cacheName: "images",
        expiration: {
          maxEntries: 100,
          maxAgeSeconds: 7 * 24 * 60 * 60, // 1 minggu
        },
      },
    },
    // 3. Cache untuk Font & CSS (Bawaan)
    {
      urlPattern: /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      handler: "StaleWhileRevalidate",
      options: {
        cacheName: "static-font-assets",
        expiration: {
          maxEntries: 4,
          maxAgeSeconds: 7 * 24 * 60 * 60,
        },
      },
    },
    // 4. Fallback untuk rute lainnya
    {
      urlPattern: /.*/i,
      handler: "NetworkFirst",
      options: {
        cacheName: "others",
        expiration: {
          maxEntries: 32,
          maxAgeSeconds: 24 * 60 * 60,
        },
      },
    },
  ],
});

const nextConfig = {
  turbopack: {}, 
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default withPWA(nextConfig);