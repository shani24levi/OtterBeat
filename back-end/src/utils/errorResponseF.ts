import { Response, Request } from 'express';
import { StatusCode } from './statusCode';

const errorResponse = (req: Request, res: Response, message: string, status: Required<StatusCode.Error>): Response<any, Record<string, any>> =>
  res.status(status).json({
    success: false,
    message: message,
  });

export { errorResponse };
