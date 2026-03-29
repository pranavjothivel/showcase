/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['40ed-198-44-159-86.ngrok-free.app'],
  experimental: {
    optimizePackageImports: ['@radix-ui/react-icons', 'lucide-react']
  },
  transpilePackages: ['@radix-ui/react-icons']
}

export default nextConfig