const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const path = require("path");
const dist = __dirname + "/dist";
module.exports = {
  entry: ["./src/App"],
  devtool: "source-map",
  output: {
    // 出力するファイル名
    filename: "bundle.js",
    // 出力先のパス（v2系以降は絶対パスを指定する必要がある）
    path: path.join(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                ["@babel/react"],
                [
                  "@babel/env",
                  {
                    useBuiltIns: "usage", // 必要な分だけのpolyfillを自動でインポート
                    modules: false //webpack tree shakingの有効化
                  }
                ]
              ],
              // 開発時に変換結果をキャッシュする
              // 本番用のビルドにはこの設定は不要
              cacheDirectory: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: "url-loader"
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true
            }
          },
          "postcss-loader"
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./template.html"
    }),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    })
  ],
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      components: path.resolve(__dirname, "src/components"),
      container: path.resolve(__dirname, "src/container"),
      images: path.resolve(__dirname, "src/images"),
      constant: path.resolve(__dirname, "src/constant"),
      reducers: path.resolve(__dirname, "src/reducers"),
      actions: path.resolve(__dirname, "src/actions")
    }
  }
};
