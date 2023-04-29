import { Request, Response, NextFunction } from 'express';
import { StatusCode } from '../utils/statusCode';

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  console.log(err);
  res.status(500 || StatusCode.Error.ServerError).json({
    success: false,
    error: err.message || 'Server Error',
  });
};
