import winston from 'winston';
const buildDevLogger = require('./dev-logger');
const { buildProdLogger, buildProdLoggerInfo } = require('./prod-logger');

let loggerErr,
  loggerInfo = null;
if (process.env.NODE_ENV === 'development') {
  loggerErr = buildDevLogger();
} else {
  loggerErr = buildProdLogger();
  loggerInfo = buildProdLoggerInfo();
}

module.exports = { loggerErr, loggerInfo };
