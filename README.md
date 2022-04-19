### Iniciar un proyecto 

    $ npm init -y

### Crear la siguiente estructura de carpetas y archivos

    - public/index.html
    - src/index.js
    - .babelrc
    - .gitignore
    - package.json (creado con el comando "npm init -y")
    - README.md
    - webpack.config.js

### Instalar las siguientes dependencia en desarrollo

    $ npm i --save-dev webpack webpack-dev-server webpack-cli

    $ npm i --save-dev @babel/core @babel/preset-env 

    $ npm i --save-dev babel-loader

    $ npm i --save-dev css-loader style-loader sass-loader node-sass

    $ npm i --save-dev mini-css-extract-plugin html-webpack-plugin clean-webpack-plugin

    $ npm i --save-dev url-loader 

    $ npm i --save-dev @babel/preset-react

    $ npm i --save react react-dom

    $ npm i --save bootstrap @popperjs/core

    $ npm i --save @fortawesome/fontawesome-free (libreria de iconos de FontAwesome)

    $ npm i --save react-icons (otra libreria de iconos (varios))

### Configuracion archivo .babelrc

    {
        "presets": [
            "@babel/preset-env",
            "@babel/preset-react"
        ]
    }

### Configuracion archivo .gitignore

    # Created by https://www.toptal.com/developers/gitignore/api/react
    # Edit at https://www.toptal.com/developers/gitignore?templates=react

    ### react ###
    .DS_*
    *.log
    logs
    **/*.backup.*
    **/*.back.*

    node_modules
    bower_components

    *.sublime*

    psd
    thumb
    sketch

    # End of https://www.toptal.com/developers/gitignore/api/react


### Configuracion archivo package.json

    "scripts": {
        ...
        "start": "webpack serve --config ./webpack.config.js --mode development",
        "build": "webpack --mode production",
        ...
    },


### Configuracion archivo webpack.config.js

    const path = require('path');
    const HtmlWebpackPlugin = require('html-webpack-plugin');
    const MiniCssExtractPlugin = require('mini-css-extract-plugin');
    const { CleanWebpackPlugin } = require('clean-webpack-plugin');

    module.exports = {
        devtool: 'source-map',
        devServer: {
            allowHosts: 'all',
            compress: true,
            port: 3000,
            open: true,
            hot: true,
        },
        entry: path.resolve(__dirname, './src/index.js'),
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: ['babel-loader']
                },
                {
                    test: /\.(jpe?g|png|gif)$/,
                    use: {
                        loader: 'url-loader',
                    },
                },
                {
                    test: /\.(css|scss)$/,
                    use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
                },
            ]
        },
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'js/[name].bundle.js',
            publicPath: '/'
        },
        resolve: {
            extensions: ['*', '.js', '.jsx']
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, './public/index.html'),
                filename: 'index.html'
            }),
            new MiniCssExtractPlugin({
                filename: 'css/style.css'
            }),
            new CleanWebpackPlugin()
        ]
    }