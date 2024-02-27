const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PwaManifestPlugin = require('webpack-pwa-manifest');
const {
  WebpackManifestPlugin: AssetManifestPlugin,
} = require('webpack-manifest-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.tsx',
  },

  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-typescript',
              [
                '@babel/preset-react',
                {
                  runtime: 'automatic',
                },
              ],
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/PipiWave.svg',
      filename: './index.html',
    }),
    // Serves the manifest.json file
    new PwaManifestPlugin({
      filename: 'manifest.json',
      name: 'Parcel Pointers',
      short_name: 'Parcel Pointers',
      description:
        'A Teach LA learning lab about C++ pointers! Made for students taking CS31/CS32',
      background_color: '#ffffff',
      theme_color: '#000000',
      icons: [
        {
          src: path.resolve('./public/PipiWave.svg'),
          size: '1024x1024',
          purpose: 'maskable',
        },
      ],
      fingerprints: false,
    }),
    // Serves a file `./asset-manifest.json` which indicates all the asset paths
    new AssetManifestPlugin({
      fileName: 'asset-manifest.json',
    }),
    new CleanWebpackPlugin(),
  ],
};
