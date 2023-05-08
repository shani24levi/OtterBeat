import { Request, Response, NextFunction } from 'express';
import { ErrorResponse, StatusCode } from '../utils';
const { loggerErr } = require('../utils/logger');

export const errorHandler = (err: ErrorResponse, req: Request, res: Response, next: NextFunction) => {
  //console.log('errorHandler.statusCode', err.statusCode);
  //console.log('errorHandler.err.all'.red.bold, err.statusCode);
  loggerErr.error(`${err.statusCode || 500} - ${err.message} - ${req.originalUrl} - ${req.method}`);

  let error = { ...err };
  error.message = err.message;

  if (err.message.includes('duplicate')) {
    const castumErr = `Already exists`;
    error = new ErrorResponse(castumErr, StatusCode.Error.BadRequest);
  }

  res.status(error.statusCode || StatusCode.Error.ServerError).json({
    success: false,
    error: error.message || 'Server Error',
  });
};
