import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import {proxyStrategies} from "./strategies";


const app = express();


proxyStrategies()
    .map((strategy) =>
        app.use((req, res, next) => {
            if (strategy.shouldHandlePath(req.path)) {
                return createProxyMiddleware({
                    target: strategy.getTarget(),
                    changeOrigin: true,
                    ws: true
                })(req, res, next);
            }
            next();
        })
    );


app.use('/_next/static', createProxyMiddleware({
    changeOrigin: true,
    router: (req) => {
        const referer = req.headers.referer || '';
        const strategy = proxyStrategies().find((strategy) => strategy.shouldHandlePath(referer));
        return strategy?.getTarget();
    },
}));


app.use('*', (req, res) => {
    res.status(404).send('Not found');
});


app.listen(3000, () => {
    console.log('Reverse proxy running on http://localhost:3000');
});
