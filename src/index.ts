let dotenv  = require('dotenv');
dotenv.config({path:'./.env'});

import { getLogger } from './log/logs_initializer';

//getLogger().info("[data]")

export { getLogger };