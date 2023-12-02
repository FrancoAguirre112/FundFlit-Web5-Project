// const webpack = require('webpack');

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,

//   webpack: (config, { isServer, buildId, dev, webpack }) => {
//     if (!isServer) {
//       config.resolve.fallback = {
//         ...config.resolve.fallback,
//         stream: require.resolve('stream-browserify'),
//         crypto: require.resolve('crypto-browserify'),
//       };

//       config.plugins.push(
//         new webpack.ProvidePlugin({
//           process: 'process/browser',
//         }),
//         new webpack.NormalModuleReplacementPlugin(
//           /node:crypto/,
//           (resource) => {
//             resource.request = resource.request.replace(/^node:/, '');
//           }
//         )
//       );
//     }
//     return config;
//   },
// };

// module.exports = nextConfig;

const webpack = require('webpack');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  webpack: (config, { isServer, buildId, dev }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        stream: require.resolve('stream-browserify'),
        crypto: require.resolve('crypto-browserify'),
      };

      config.plugins.push(
        new webpack.ProvidePlugin({
          process: 'process/browser',
        }),
        new webpack.NormalModuleReplacementPlugin(
          /node:crypto/,
          (resource) => {
            resource.request = resource.request.replace(/^node:/, '');
          }
        )
      );

      if (!isServer) {
        config.plugins = [
          ...config.plugins,
          new NodePolyfillPlugin() // Adding the NodePolyfillPlugin for client-side
        ];
      }
    }
    return config;
  },
};

module.exports = nextConfig;


