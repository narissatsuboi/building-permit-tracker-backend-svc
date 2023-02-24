const path = require('path');

const morgan = require('morgan');
const logger = require(path.join('..', 'utils', 'logger'));

const stream = {
  // Use the http severity
  write: (message) => logger.http(message),
};

const skip = () => {
  const env = process.env.NODE_ENV || 'development';
  return env !== 'development';
};

morgan.token('body', (req) => {
  return JSON.stringify(req.body);
});

const morganMiddleware = morgan( (tokens, req, res) => {
  const method = tokens.method(req, res);
  const status = tokens.status(req, res);
  const url = tokens.url(req, res);
  const reqBody = tokens.body(req);

  const logLine = `${method} ${status} ${url} ${reqBody}`;
  return logLine;
}, {stream, skip});

module.exports = morganMiddleware;
