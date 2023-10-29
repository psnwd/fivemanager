await import("./src/env.mjs")

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  experimental: {
    serverActions: true,
  },
  async redirects() {
    return [
      {
        source: "/discord",
        destination: "https://discord.com/invite/",
        permanent: true,
      },
      {
        source: "/github",
        destination: "https://github.com/psnwd",
        permanent: true,
      },
      {
        source: "/facebook",
        destination: "https://facebook.com/",
        permanent: true,
      },
      {
        source: "/x",
        destination: "https://x.com/",
        permanent: true,
      },
      {
        source: "/twitter",
        destination: "https://twitter.com/",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
