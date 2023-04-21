/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'CO3 KASM',
    description: 'Kasm supported workspaces CO3.',
    icon: 'https://githubja-lab.github.io/kasm-registry/1.0/image.png',
    listUrl: 'https://githubja-lab.github.io/kasm-registry/',  
    contactUrl: 'https://github.com/githubja-lab/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
