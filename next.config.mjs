/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export -> deployable as pure HTML/CSS/JS to any CDN / JAMstack
  // host (Netlify, Vercel, Cloudflare Pages, GitHub Pages) with no server runtime.
  output: "export",

  // Heritage site photography is served pre-optimized (WebP, multiple
  // widths) since `next/image`'s on-demand optimizer requires a Node
  // server and is unavailable in static export mode.
  images: {
    unoptimized: true,
  },

  reactStrictMode: true,
  trailingSlash: true,
};

export default nextConfig;
