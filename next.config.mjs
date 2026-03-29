/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['*.ngrok-free.app'],
  experimental: {
    optimizePackageImports: ['@radix-ui/react-icons', 'lucide-react']
  },
  transpilePackages: ['@radix-ui/react-icons']
}

export default nextConfig