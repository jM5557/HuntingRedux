module.exports = {
    entry: './src/js/main.js',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              {
                plugins: [
                  '@babel/plugin-proposal-class-properties'
                ]
              }
            ]
          },
        }
      ]
    },
    output: {
        filename: 'main.js',
        path: __dirname + "/assets/js"
    }
  };