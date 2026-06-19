export default {
  experimental: {
    ppr: true,
    inlineCss: true,
    useCache: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      // Shopify CDN — production product images
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
        pathname: "/s/files/**",
      },
      // Unsplash — used by mock product fallbacks in lib/mock.ts.
      // Cart modal renders these via Next.js <Image>, so this is required
      // in development when Shopify isn't connected.
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};
