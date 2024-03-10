/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    formats:['image/avif' , 'image/webp'],
    remotePatterns:[
      {
        hostname:'res.cloudinary.com'
      }
    ]

  }
}

module.exports = nextConfig
