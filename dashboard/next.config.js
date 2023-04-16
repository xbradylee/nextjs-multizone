module.exports = {
    async rewrites() {
        return [
            {
                source: '/my-items',
                destination: '/my-items',
            },
            {
                source: '/items',
                destination: '/items',
            },
            {
                source: '/users',
                destination: '/users',
            }
        ];
    },

    webpack(config, { isServer, dev }) {
        if (!isServer && dev) {
            config.output.publicPath = '/_next/';
        }

        return config;
    },
};
