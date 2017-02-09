const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: path.join(__dirname, "www/index.js"),
    output: {
        
    path: __dirname+"/www",
    filename: 'app.js'
  
    },   
    module: {
          loaders: [                       
            {
              test: /\.js?/,
              include: path.join(__dirname, "www"),
              loaders:"babel-loader"
            },
            { 
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
      ]  
    }
};