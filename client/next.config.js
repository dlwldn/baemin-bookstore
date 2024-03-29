module.exports = {
    // webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    //     // Note: we provide webpack above so you should not `require` it
    //     // Perform customizations to webpack config
    //     config.module.rules.push({
    //         test: /\.svg$/,
    //         use: ['@svgr/webpack', 'url-loader'],
    //     });

    //     // Important: return the modified config
    //     return config;
    // },
    webpack(config) {
        config.module.rules.push({
          test: /\.svg$/,
          use: ["@svgr/webpack", 'url-loader']
        });
    
        return config;
      }
};
