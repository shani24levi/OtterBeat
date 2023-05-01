import { Response, Request } from 'express';
import { StatusCode } from './statusCode';

const successResponse = (
  req: Request,
  res: Response,
  data: any,
  status: Required<StatusCode.Success> = StatusCode.Success.OK,
): Response<any, Record<string, any>> =>
  res.status(status).json({
    success: true,
    data,
  });

export { successResponse };
