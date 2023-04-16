import {ProxyStrategy} from "./proxyStrategies";

const dashboardTarget = 'http://localhost:3002';

export const dashboardStrategies = (): ProxyStrategy[] => [
    myItemsProxyStrategy,
    itemsProxyStrategy,
    usersProxyStrategy
];

const myItemsProxyStrategy: ProxyStrategy = {
    shouldHandlePath: (path) => path.includes('/my-items'),
    getTarget: () => dashboardTarget,
};

const itemsProxyStrategy: ProxyStrategy = {
    shouldHandlePath: (path) => path.includes('/items'),
    getTarget: () => dashboardTarget,
};

const usersProxyStrategy: ProxyStrategy = {
    shouldHandlePath: (path) => path.includes('/users'),
    getTarget: () => dashboardTarget,
};