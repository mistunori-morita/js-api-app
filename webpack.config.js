module.exports = {
  mode: "development",
  devServer: {
    contentBase: "./dist",
    port: 9898
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{ loader: "babel-loader" }],
        exclude: /node_modules/
      }
    ]
  }
};