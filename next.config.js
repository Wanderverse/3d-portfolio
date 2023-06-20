import withBundleAnalyzer from '@next/bundle-analyzer'

const nextConfig = {
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  swcMinify: true,

  experimental: {
    reactRoot: 'concurrent',
    appDir: true,
  },
  transpilePackages: ['core', '@react-three/postprocessing'],
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.

  typescript: {
    ignoreBuildErrors: true,
  },

  images: {},
  webpack(config, { isServer }) {
    config.experiments = {
      topLevelAwait: true,
      layers: true,
    }

    // audio support
    config.module.rules.push({
      test: /\.(ogg|mp3|wav|mpe?g)$/i,
      exclude: config.exclude,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: config.inlineImageLimit,
            fallback: 'file-loader',
            publicPath: `${config.assetPrefix}/_next/static/images/`,
            // outputPath: `${isServer ? '../' : ''}static/images/`,
            name: '[name]-[hash].[ext]',
            esModule: config.esModule || false,
          },
        },
      ],
    })

    // shader support
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      exclude: /node_modules/,
      use: ['raw-loader', 'glslify-loader'],
    })

    return config
  },
}

export default nextConfig
// export default (_phase, { defaultConfig }) => {
//   const plugins = [[withBundleAnalyzer, { enabled: process.env.ANALYZE === 'true' }]]

//   const wConfig = plugins.reduce((acc, [plugin, config]) => plugin({ ...acc, ...config }), {
//     ...defaultConfig,
//     ...nextConfig,
//   })

//   const finalConfig = {}
//   Object.keys(wConfig).forEach((key) => {
//     finalConfig[key] = wConfig[key]
//   })

//   return finalConfig
// }
