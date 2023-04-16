import {ProxyStrategy} from "./proxyStrategies";

const landingTarget = 'http://localhost:3001';

export const landingStrategies = (): ProxyStrategy[] => [
    baseProxyStrategy,
    aboutProxyStrategy,
    pricingProxyStrategy,
];

const baseProxyStrategy: ProxyStrategy = {
    shouldHandlePath: (path) => path === '/',
    getTarget: () => landingTarget,
};

const aboutProxyStrategy: ProxyStrategy = {
    shouldHandlePath: (path) => path.includes('/about'),
    getTarget: () => landingTarget,
};

const pricingProxyStrategy: ProxyStrategy = {
    shouldHandlePath: (path) => path.includes('/pricing'),
    getTarget: () => landingTarget,
};
