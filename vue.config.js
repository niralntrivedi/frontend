module.exports = {
    devServer: {
        https: false,
        disableHostCheck: true,
        port: 3001,
        proxy: 'http://localhost:3000'
    }
}