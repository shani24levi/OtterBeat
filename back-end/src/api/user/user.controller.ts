import { Request, Response, NextFunction } from 'express';
import { successResponse, errorResponse, StatusCode, ErrorResponse } from '../../utils';

// @desc    Get all songs
// @route   GET /api/songs
// @access  Public
// const getSongs = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
//   console.log('users', songsArr);
//   successResponse(req, res, { songs: songsArr }, StatusCode.Success.Accepted);
//   return;
// };
