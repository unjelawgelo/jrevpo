/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    // Optimized for mobile-first approach
    deviceSizes: [375, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 60 * 60 * 24 * 7, // 1 week
    disableStaticImages: false,
    unoptimized: process.env.NODE_ENV !== 'production',
  },
  
  // Performance optimizations
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', 'framer-motion'],
    scrollRestoration: true,
    optimizeCss: true,
    optimizeServerReact: true,
  },
  
  // General optimizations
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  productionBrowserSourceMaps: false,
  
  // Webpack optimizations
  webpack: (config, { isServer, dev }) => {
    // Only run these optimizations on client-side in production
    if (!isServer && !dev) {
      config.optimization.splitChunks = {
        chunks: 'all',
        maxInitialRequests: 10,
        maxAsyncRequests: 10,
        minSize: 20000,
        cacheGroups: {
          vendor: {
            name: 'vendor',
            test: /[\\/]node_modules[\\/](lucide-react|framer-motion|@radix-ui)[\\/]/,
            chunks: 'all',
            priority: 10,
          },
          styles: {
            name: 'styles',
            test: /\.(css|scss)$/,
            chunks: 'all',
            enforce: true,
          },
        },
      };
      
      // Enable chunk optimization
      config.optimization.runtimeChunk = 'single';
    }
    
    // Add file-loader for fonts
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: 'asset/resource',
    });
    
    return config;
  },
  
  // Enable compression in production
  compress: true,
  
  // Enable HTTP/2 server push
  http2ServerPush: true,
  
  // Enable static HTML export
  output: 'standalone',
};

// Enable bundle analyzer in development
if (process.env.ANALYZE === 'true') {
  const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
  });
  module.exports = withBundleAnalyzer(nextConfig);
} else {
  module.exports = nextConfig;
}
