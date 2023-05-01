import { Request, Response, NextFunction } from 'express';
import { songsArr } from '../../constants';
import { successResponse, errorResponse, StatusCode, ErrorResponse } from '../../utils';

// @desc    Get all songs
// @route   GET /api/songs
// @access  Public
const getSongs = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  console.log('users', songsArr);
  return successResponse(req, res, { songs: songsArr }, StatusCode.Success.Accepted);
};

// @desc    Get all songs OF artist
// @route   GET /api/songs/:artist_name
// @access  Public
const getArtistSongs = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const artist_name = req.params.artist_name.toLowerCase();
    let item = songsArr.find((el) => el.artist.toLowerCase() === artist_name);
    !item && (item = songsArr.find((el) => el.artist.toLowerCase().match(artist_name)));
    if (!item) {
      return next(new ErrorResponse('Not Found', StatusCode.Error.NotFound));
    }
    successResponse(req, res, { songs: item }, StatusCode.Success.OK);
  } catch (err) {
    return next(new ErrorResponse('Not Found', StatusCode.Error.NotFound));
  }
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
