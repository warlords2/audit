let dotenv  = require('dotenv');
dotenv.config({path:'./.env'});

export { getLogger } from './log/logs_initializer';

/*
getLogger().info("[data]")
*/