const baseConfig = {
  mode: 'development', // change to production
  watch: true,
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};

const clientConfig = {
  ...baseConfig,
  entry: `${__dirname}/src/App.tsx`,
  output: {
    path: `${__dirname}/public/js`,
    filename: 'bundle.js',
  },
};

const serverConfig = {
  ...baseConfig,
  entry: `${__dirname}/server/app.ts`,
  target: 'node',
  output: {
    path: `${__dirname}/dist`,
    filename: 'dist.js',
  },
};

module.exports = [clientConfig, serverConfig];
