import { Request, Response, NextFunction } from 'express';
import { songsArr } from '../../constants';
import { successResponse, errorResponse, StatusCode, ErrorResponse } from '../../utils';
import { asyncHandler } from '../../middlewares/async';
import { client } from '../../sql/client';

// @desc    Get all songs
// @route   GET /api/songs
// @access  Public
const getSongs = asyncHandler(async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  client.query(
    `select a.artistid,s.songid, a.artist,s.title, s.duration, s.releaseYear from songslist sl join songs s on s.songid =sl.songid join artist a on a.artistid =sl.artistid`,
    (err, resSQL) => {
      if (!resSQL || err) return next(new ErrorResponse(err.message, StatusCode.Error.NotFound));
      if (resSQL) return successResponse(req, res, { songs: resSQL.rows }, StatusCode.Success.Created);
    },
  );
});

// @desc    Get all songs OF artist
// @route   GET /api/songs/:artist_name
// @access  Public
const getArtistSongs = asyncHandler(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const artist_name = req.params.artist_name.toLowerCase();
  client.query(`select * from songs where title LIKE '%${req.params.artist_name}%'`, (err, resSQL) => {
    if (!resSQL || err) return next(new ErrorResponse(err.message, StatusCode.Error.NotFound));
    if (resSQL) return successResponse(req, res, { songs: resSQL.rows }, StatusCode.Success.Created);
  });
});

export default { getSongs, getArtistSongs };
