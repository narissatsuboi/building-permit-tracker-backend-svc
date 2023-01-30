const winston = require('winston');
const expressWinston = require('express-winston');

const logger = winston.createLogger({
    transports: [
        new winston.transports.Console()
    ]
});

module.exports = { 
    raw: logger,
    error: logger.error.bind(logger),
    warn: logger.warn.bind(logger),
    info: logger.info.bind(logger),
    log: logger.log.bind(logger),
    verbose: logger.verbose.bind(logger),
    debug: logger.debug.bind(logger),
    silly: logger.silly.bind(logger),
}; 