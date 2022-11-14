const { defineConfig } = require('@vue/cli-service')
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const HtmlWebpackInlineSourcePlugin = require("html-webpack-inline-source-plugin");

module.exports = defineConfig({
  transpileDependencies: true
})
console.log('serve了', process.env.NODE_ENV)
module.exports = ({
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
//   plugins: [
//     new HtmlWebpackPlugin({
//         // 正则匹配需要内联的文件
//         inlineSource: /\.(js|css)$/
//     }),
//     // 注意这里必须传参
//     new HtmlWebpackInlineSourcePlugin(HtmlWebpackPlugin)
// ]
})
