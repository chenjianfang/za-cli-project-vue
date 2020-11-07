// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
    "plugins": {
        "autoprefixer": {
            browsers: ['iOS >= 7', 'Android >= 4.1']
        },
        // "postcss-px2rem": {
        //     remUnit: 75
        // },
        "cssnano": {
            zindex: false
        }
    }
};
