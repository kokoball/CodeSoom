const path = require("path");

module.exports = {
  // index.js 파일이 아닌 index.jsx 파일로 시작시
  entry: path.resolve(__dirname, "src/index.jsx"),
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
};
