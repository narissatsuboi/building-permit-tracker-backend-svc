const winston = require('winston');
const expressWinston = require('express-winston');
const path = require('path');

const getTransports = () => {
    const transports = [
        new winston.transports.Console(),
    ];
    return transports;
};

const getFormat = () => winston.format.combine(
    winston.format.colorize(),
    winston.format.simple()
);

// set logger properties
const loggerConfig = {
    level: 'info', 
    format: getFormat(),
    transports: getTransports(),
    exitOnError: true,
    silent: false,
};

// init logger w/ config
const logger = winston.createLogger(loggerConfig);

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