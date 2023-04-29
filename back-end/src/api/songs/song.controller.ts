import { Request, Response, NextFunction } from 'express';
import { infoObject } from '../../constants';
import { successResponse } from '../../utils/successResponse';
import { StatusCode } from '../../utils/statusCode';
import ErrorResponse from '../../utils/errorResponse';

// @desc    Get all songs
// @route   GET /api/songs
// @access  Public
const getSongs = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const users = infoObject[1].artist;
  console.log('users', users);
  //   return next(new ErrorResponse(`not found`, StatusError.NotFound));
  successResponse(req, res, { users: users }, StatusCode.Success.OK);
};

// @desc    Get all songs OF artist
// @route   GET /api/songs/:artist_name
// @access  Public
const getArtistSongs = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  res.send('About Blog');
};

// @desc    Get all getFavorites songs
// @route   GET /api/songs/favorites/:song
// @access  Privet
const getFavorites = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  res.send('About Blog');
};

// @desc    POST favorites songs
// @route   POST /api/songs/favorites/:song
// @access  Privet
const createFavorite = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  res.send('About Blog');
};

// @desc    DELETE favorites song by id or name oof the song
// @route   DELETE /api/songs/favorites/:song
// @access  Privet
const removeFavorites = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  res.send('About Blog');
};

export default { getSongs, getArtistSongs, getFavorites, createFavorite, removeFavorites };
