import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { ErrorResponse, StatusCode } from '../utils';
import { getConfig } from './../config';

//for privet routes
// Checks whether the token is valid or not
exports.protect = async (req: Request, res: Response, next: NextFunction) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    // Set token from Bearer token in header
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return next(new ErrorResponse('Not authorized Access denied', 403));
  }
  try {
    const decoded = jwt.verify(token, 'getConfig()!.NODE_ENV');
    // req.user = await User.findById(decoded._id);
    // req.email = decoded.email;
    // req._id = decoded._id
    // req.profile_id = decoded.profile_id
    next();
  } catch (err) {
    // If the token is incorrect
    return next(new ErrorResponse('Not authorized to access this route', StatusCode.Error.Unauthorized));
  }
};
