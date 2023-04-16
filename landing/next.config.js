module.exports = {
    async rewrites() {
        return [
            {
                source: '/',
                destination: '/',
            },
            {
                source: '/about',
                destination: '/about',
            },
            {
                source: '/pricing',
                destination: '/pricing',
            },
        ];
    },

    webpack(config, { isServer, dev }) {
        if (!isServer && dev) {
            config.output.publicPath = '/_next/';
        }

        return config;
    },
};
