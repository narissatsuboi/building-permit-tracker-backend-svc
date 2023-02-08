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
    // winston.format.json(),
    winston.format.simple(),
    winston.format.colorize(),
);

// logger
const logger = winston.createLogger({
    level: 'info', 
    format: getFormat(),
    transports: getTransports(),
    exitOnError: true,
    silent: false,
});

// http logger
const requestLogger = expressWinston.logger ({
    format: getFormat(),
    transports: getTransports(),
    colorize: true,
    expressFormat: true,
    meta: true, 
    requestWhitelist: ['method', 'url', 'query', 'statusCode'],
    msg: '{{req.method}} {{req.url}} {{res.statusCode}}',
});

const errorLogger = expressWinston.errorLogger({
    format: getFormat(),
    transports: getTransports(),
    colorize: true,
    expressFormat: true,
    meta: true, 
    requestWhitelist: ['method', 'url', 'query', 'statusCode'],
    msg: '{{err.message}} {{res.statusCode}} {{req.method}}',
});

module.exports = { 
    requestLogger,
    errorLogger,
    logger,
    raw: logger,
    error: logger.error.bind(logger),
    warn: logger.warn.bind(logger),
    info: logger.info.bind(logger),
    log: logger.log.bind(logger),
    verbose: logger.verbose.bind(logger),
    debug: logger.debug.bind(logger),
    silly: logger.silly.bind(logger),
}; 