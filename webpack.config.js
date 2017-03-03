const path = require('path');

const config = {
    devtool: 'source-map',
    entry: {
        indexPage: './js/index.js',
        contactPage: './js/contact.js',
    },
    output: {
        path: path.resolve(__dirname, 'web', 'dist'),
        filename: '[name].js',
    },
};

module.exports = config;
