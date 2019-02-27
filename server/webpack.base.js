module.exports = {
  // Tell webpack to run babel on every file it runs through
  module: {
    rules: [
      // apply babel to .js only
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
            'stage-0',
            ['env', { targets: { borwsers: ['last 2 versions'] } }]
          ]
        }
      }
    ]
  }
};
