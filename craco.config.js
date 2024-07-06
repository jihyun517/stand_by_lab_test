const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  reactScriptsVersion: 'react-scripts',
  style: {
    css: {
      loaderOptions: () => {
        return { url: false };
      },
    },
  },
};
