import { Request, Response, NextFunction } from 'express';
import { successResponse, errorResponse, StatusCode, ErrorResponse } from '../../utils';
import { asyncHandler } from '../../middlewares/async';
import { client } from '../../sql/client';

// @desc    Get all songs
// @route   GET /api/likes/
// @access  Public
const getLikesOfSongs = asyncHandler(async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  client.query(
    `select s.title, l.songid, count(l.songid) AS likes from likes l join songs s on s.songid =l.songid group by l.songid ,s.title ORDER BY count(l.songid) DESC`,
    (err, resSQL) => {
      if (!resSQL || err) return next(new ErrorResponse(err.message, StatusCode.Error.NotFound));
      if (resSQL) return successResponse(req, res, { songs: resSQL.rows }, StatusCode.Success.Created);
    },
  );
});

// @desc    Post add like to a song by id
// @route   Post /api/likes/:id
// @access  Privet
const addLike = asyncHandler(async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  client.query(`INSERT INTO likes (userid, songid) VALUES(${req.userid},${req.params.id})`, (err, resSQL) => {
    if (!resSQL || err) return next(new ErrorResponse(err.message, StatusCode.Error.NotFound));
    if (resSQL) return successResponse(req, res, { songs: { command: resSQL.command, rowCount: resSQL.rowCount } }, StatusCode.Success.Created);
  });
});

// @desc    Delete remove like to a song by id
// @route   Delete /api/likes/:id
// @access  Privet
const removeLike = asyncHandler(async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  client.query(`DELETE FROM likes WHERE userid='${req.userid}' and songid='${req.params.id}'`, (err, resSQL) => {
    if (!resSQL || err) return next(new ErrorResponse(err.message, StatusCode.Error.NotFound));
    if (resSQL.rows) {
      return successResponse(req, res, { user: { command: resSQL.command, rowCount: resSQL.rowCount } }, StatusCode.Success.OK);
    }
  });
});

export default { getLikesOfSongs, addLike, removeLike };
