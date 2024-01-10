const { parsed: myEnv } = require('dotenv').config();

module.exports = {
  env: {
    ...myEnv,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mc-heads.net',
        port: '',
        pathname: '/**',
      },
    ],
  },

};
