import { Request, Response, NextFunction } from 'express';
import { ErrorResponse, StatusCode } from '../utils';

export const errorHandler = (err: ErrorResponse, req: Request, res: Response, next: NextFunction) => {
  console.log('errorHandler.statusCode', err.statusCode);
  res.status(err.statusCode || StatusCode.Error.ServerError).json({
    success: false,
    error: err.message || 'Server Error',
  });
};
