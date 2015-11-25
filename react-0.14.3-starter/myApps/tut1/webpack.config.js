module.exports = {
  context: __dirname,
  entry: "./RandomMessage.jsx",

  output: {
    filename: "bundle.js",
    path: __dirname + "/dist",
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015']
      }
    }]
  }
};
