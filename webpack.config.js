// import
const path = require('path') //path는 node 에서 제공하는 전용 모듈
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

// export
module.exports = {
  
  // 파일을 읽어들이기 시작하는 진입점 설정 - webpack 은 js 로 읽음
  entry: './js/main.js',
  
  // 결과물(번들)을 반환하는 설정 
  output: {
    // path: path.resolve(__dirname, 'dist'), 
    // path : 결과물을 어떤 경로에 내어줄 것인지 - node 에서는 절대 경로 명시가 필요함
    // __dirname : 현 파일의 경로를 지칭함
    // filename: 'main.js',
    clean: true
    // clean: true => 위 설정에 따라서 파일을 정립함(dist 내 폴더에 app.js 파일이 있다면 build 했을 때 main.js 로 저장된다)
  },

  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          'style-loader', // html의 style 태그에 직접 적용
          'css-loader', // css 로더로 읽음
          'postcss-loader', // 공급업체 접두사 적용 및 postcss
          'sass-loader' //SCSS 선 적용
        ]
      },
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },

  // 번들링 후 결과물의 처리 방식 등 다양한 플러그인을 설정
  plugins: [
    new HtmlPlugin({
      template: './index.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: 'static' }
      ]
    })
  ],

  devServer: {
    host: 'localhost'
  }
}