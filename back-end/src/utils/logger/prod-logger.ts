import winston, { format, createLogger, transports } from 'winston';
const { timestamp, combine, errors, json, printf } = format;

const buildProdLogger = (): winston.Logger => {
  return createLogger({
    format: combine(timestamp(), errors({ stack: true }), json()),
    transports: [
      new transports.File({
        filename: 'test-result/logs/error.log',
        format: format.combine(
          format.timestamp({ format: 'MMM-DD-YYYY HH:mm:ss' }),
          format.align(),
          format.printf((info) => `${info.level}: ${[info.timestamp]}: ${info.message}`),
          format.json(),
        ),
      }),

      // new winston.transports.File({
      //   filename: 'test-result/logs/error.log',
      //   level: 'error',
      //   format: format.combine(
      //     format.timestamp({ format: 'MMM-DD-YYYY HH:mm:ss' }),
      //     format.align(),
      //     format.printf((info) => `${info.level}: ${[info.timestamp]}: ${info.message}`),
      //   ),
      // }),
      // new winston.transports.File({ filename: 'test-result/logs/combined.log', level: 'info' }),
    ],
  });
};

const buildProdLoggerInfo = (): winston.Logger => {
  return createLogger({
    format: combine(timestamp(), errors({ stack: true }), json()),
    transports: [
      new transports.File({
        level: 'info',
        filename: 'test-result/logs/combined.log',
        format: format.combine(
          format.timestamp({ format: 'MMM-DD-YYYY HH:mm:ss' }),
          format.align(),
          format.printf((info) => `${info.level}: ${[info.timestamp]}: ${info.message}`),
          format.json(),
        ),
      }),
    ],
  });
};

module.exports = {
  buildProdLogger: buildProdLogger,
  buildProdLoggerInfo: buildProdLoggerInfo,
};
