import { Request, Response, NextFunction } from 'express';
import { successResponse, StatusCode, ErrorResponse } from '../../utils';
import { asyncHandler } from '../../middlewares/async';
import { client } from '../../sql/client';
import { RedisConnector } from '../../utils/redis/redisConnector';

// @desc    Get all songs
// @route   GET /api/songs
// @access  Public
const getSongs = asyncHandler(async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  const query =
    'select a.artistid,s.songid, a.artist,s.title, s.duration, s.releaseYear from songslist sl join songs s on s.songid =sl.songid join artist a on a.artistid =sl.artistid';
  const result = await client.query(query);
  const data = result.rows;
  //set in cache for 1 min
  const key = '__express__' + req.originalUrl || req.url;
  let cache = await RedisConnector();
  await cache.set(key, JSON.stringify(data), { EX: 60 });

  return successResponse(req, res, data, StatusCode.Success.OK);
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
