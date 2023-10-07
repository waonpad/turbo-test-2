import './src/constants/client-env.mjs';
import './src/constants/server-env.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // modularizeImports: {
  //   "@mui/icons-material": {
  //     transform: "@mui/icons-material/{{member}}",
  //   },
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        port: '',
        pathname: '/random',
      },
    ],
  },
};

export default nextConfig;
