import './src/constants/clientEnv.mjs';
import './src/constants/serverEnv.mjs';

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
