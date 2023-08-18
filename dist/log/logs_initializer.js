"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLogger = void 0;
const winston_1 = require("winston");
//import LokiTransport  from "winston-loki"
const LokiTransport = require("winston-loki");
console.log(LokiTransport);
const HOST_LOKI = process.env.HOST_LOKI || "http://localhost:3100";
const APP_NAME = process.env.APP_NAME_LOG || "honeyshop";
const options = ({
    transports: [new LokiTransport({
            host: HOST_LOKI,
            labels: { app: APP_NAME },
            json: true,
            format: winston_1.format.json(),
            replaceTimestamp: true,
            onConnectionError: (err) => console.error(err)
        }),
        new winston_1.transports.Console({
            format: winston_1.format.combine(winston_1.format.simple(), winston_1.format.colorize())
        })]
});
const getLogger = () => {
    if (globalThis.logger)
        return globalThis.logger;
    else {
        globalThis.logger = (0, winston_1.createLogger)(options);
    }
    return globalThis.logger;
};
exports.getLogger = getLogger;
//# sourceMappingURL=logs_initializer.js.map