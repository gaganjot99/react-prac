const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: "./src/main.js",
    mode:'development',
    devServer:{
        static: './src',
        hot: false
    },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'Output Management',
          template:'./public/index.html'
        }),
      ],
    module:{
        rules:[{
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-react",'@babel/preset-env']
              }
            }
          },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}