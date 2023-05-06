import { TokenRequest } from './auth';
import { Request, Response, NextFunction } from 'express';

type RequestNext = Request | TokenRequest;
type Middleware = (req: RequestNext, res: Response, next: NextFunction) => any;

export const asyncHandler = (fn: Middleware) => (req: Request, res: Response, next: NextFunction) => Promise.resolve(fn(req, res, next)).catch(next);
