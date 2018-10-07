const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

const config = {
    entry: './src/index.js',
    output:{
        path: path.join(__dirname,'./dist'),
        filename: 'script-main.js'
    },
    plugins:[
        new htmlWebpackPlugin({
            template:'./src/index.html'
        })
    ],
    module: {
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,       
                loader: 'babel-loader'        
            }
        ]   
    }
}

module.exports = config