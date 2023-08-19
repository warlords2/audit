"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLogger = void 0;
let dotenv = require('dotenv');
dotenv.config({ path: './.env' });
const logs_initializer_1 = require("./log/logs_initializer");
Object.defineProperty(exports, "getLogger", { enumerable: true, get: function () { return logs_initializer_1.getLogger; } });
//# sourceMappingURL=index.js.map