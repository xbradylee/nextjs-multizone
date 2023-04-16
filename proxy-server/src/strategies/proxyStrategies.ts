import {landingStrategies} from "./landing";
import {dashboardStrategies} from "./dashboard";


export interface ProxyStrategy {
    shouldHandlePath: (path: string) => boolean;
    getTarget: () => string;
}


export const proxyStrategies = (): ProxyStrategy[] => [
    ...landingStrategies(),
    ...dashboardStrategies()
];