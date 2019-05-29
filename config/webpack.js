const path = require("path");
const fs = require("fs");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const licenseKey = fs
  .readFileSync("./config/license-key")
  .toString()
  .replace(/\s/g, "");

if (licenseKey === "") {
  console.log(
    `
Invalid or missing license key. Please save your license key to "${path.resolve(
      "./config/license-key"
    )}

If you are a customer you can find your license key in the customers portal https://customers.pspdfkit.com
otherwise if you are using an evaluation license you can find the license key at https://pspdfkit.com/guides/web/current/standalone/integration/#toc_example-application`
  );
  process.exit(1);
}

module.exports = {
  entry: path.resolve(__dirname, "../src/index.js"),
  mode: "development",
  resolve: {
    extensions: [".js", ".elm"]
  },
  module: {
    rules: [
      {
        test: /\.elm$/,
        exclude: [/elm-stuff/, /node_modules/],
        use: {
          loader: "elm-webpack-loader"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new CopyWebpackPlugin([
      {
        from: "./node_modules/pspdfkit/dist/pspdfkit-lib",
        to: "./pspdfkit-lib"
      },
      {
        from: "./assets/example.pdf",
        to: "./example.pdf"
      }
    ]),
    new webpack.DefinePlugin({
      "process.env": { PSPDFKIT_LICENSE_KEY: `"${licenseKey}"` }
    })
  ]
};
