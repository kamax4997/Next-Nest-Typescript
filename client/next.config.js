// const withSass = require('@zeit/next-sass')
// const withCSS = require('@zeit/next-css')
// const withPWA = require('next-pwa')
// const runtimeCaching = require('next-pwa/cache')

// module.exports = withCSS(
//     withSass(
//         {
//             cssModules: true,
//             webpack (config, options) {
//                 config.module.rules.push({
//                     test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
//                     use: {
//                         loader: 'url-loader',
//                         options: {
//                         esModule: false,
//                         limit: 100000,
//                         }
//                     }
//                 });

//                 return config;
//             },
//             basePath: '/auth/login',
//         }
//     )
// );

module.exports = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // config.plugins.push(new webpack.IgnorePlugin(/cypress/))
        return config
    },
    // async rewrites() {
    //     return [
    //         {
    //             source: '/:path*',
    //             destination: 'http://localhost:5000/graphql/:path*',
    //         },
    //     ]
    // },
    // async redirects() {
    //     return [
    //         {
    //             source: '/',
    //             destination: '/auth/login',
    //             permanent: true,
    //         },
    //     ]
    // },
    // basePath: '/auth/login'
};
