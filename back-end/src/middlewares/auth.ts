import { Request, Response, NextFunction } from 'express';
import { ErrorResponse, StatusCode } from '../utils';
import { asyncHandler } from './async';
import jwt from 'jsonwebtoken';
import { getConfig } from '../config';
const TOKEN = getConfig().DB;

declare module 'jsonwebtoken' {
  export interface UserIDJwtPayload extends jwt.JwtPayload {
    userid: string;
    email?: string;
    img?: string;
    is_premium?: boolean;
  }
}

export interface TokenData {
  userid?: string;
  email?: string;
  img?: string;
  is_premium?: boolean;
}

export interface TokenRequest extends Request {
  tokenData: TokenData;
}

export const protect = async (req: TokenRequest, res: Response, next: NextFunction) => {
  try {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      // Set token from Bearer token in header
      token = req.headers.authorization.split(' ')[1];
    }
    if (!token) {
      return next(new ErrorResponse('Not authorized Access denied', StatusCode.Error.Unauthorized));
    }
    try {
      const decoded = <jwt.UserIDJwtPayload>jwt.verify(token, `${TOKEN}`);
      const tokenData = {
        userId: decoded.userId,
        email: decoded.email,
        img: decoded.img,
        is_premium: decoded.is_premium,
      };
      //set extra params to response
      req.tokenData = tokenData;
      next();
    } catch (err) {
      // If the token is incorrect
      return next(new ErrorResponse('Not authorized to access this route', StatusCode.Error.Unauthorized));
    }
  } catch (error) {
    next(error);
  }
};

// change in : C:\Users\shani\Desktop\musicapp\OtterBeat\back-end\node_modules\@types\express\index.d.ts
// line 497 declare global.Express.Request
export const authToken = async (req: Request, res: Response, next: NextFunction) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    // Set token from Bearer token in header
    token = req.headers.authorization.split(' ')[1];
  }
  if (!token) {
    return next(new ErrorResponse('Not authorized Access denied', StatusCode.Error.Unauthorized));
  }
  try {
    const decoded = <jwt.UserIDJwtPayload>jwt.verify(token, `${TOKEN}`);
    //set extra params to response
    req.userid = decoded.userid;
    req.email = decoded.email;
    req.img = decoded.img;
    req.is_premium = decoded.is_premium;
    next();
  } catch (err) {
    // If the token is incorrect
    return next(new ErrorResponse('Not authorized to access this route', StatusCode.Error.Unauthorized));
  }
};
