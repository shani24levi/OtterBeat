import { Response, Request } from 'express';
import { StatusCode } from './statusCode';
const { loggerInfo } = require('../utils/logger');

const successResponse = (
  req: Request,
  res: Response,
  data: any,
  status: Required<StatusCode.Success> = StatusCode.Success.OK,
): Response<any, Record<string, any>> => {
  loggerInfo.info(`${status || 200} - ${req.originalUrl} - ${req.method}`);
  return res.status(status).json({
    success: true,
    data,
  });
};

export { successResponse };
