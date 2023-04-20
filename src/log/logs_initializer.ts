import { createLogger, transports, format, Logger } from "winston"
import LokiTransport from "winston-loki"

declare module globalThis {  
    let logger: Logger
}

const HOST_LOKI = process.env.HOST_LOKI || "http://localhost:3100";
const APP_NAME = process.env.APP_NAME || "honeyshop";

export const getLogger = () => {

    if(globalThis.logger) return globalThis.logger;
    else {
        globalThis.logger = createLogger({
            transports: [new LokiTransport({
                host: HOST_LOKI,
                labels: { app: APP_NAME},
                json: true,
                format: format.json(),
                replaceTimestamp: true,
                onConnectionError: (err) => console.error(err)
              }),
              new transports.Console({
                format: format.combine(format.simple(), format.colorize())
              })]
        });
    }

    return globalThis.logger;
}