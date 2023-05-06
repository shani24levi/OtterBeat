import { Request, Response, NextFunction } from 'express';
import { successResponse, errorResponse, StatusCode, ErrorResponse, isError, isEmpty } from '../../utils';
import { client } from '../../sql/client';
import { asyncHandler } from '../../middlewares/async';
import { TokenData, TokenRequest } from './../../middlewares/auth';
import User from './user.module';
import { QueryResult } from 'pg';
import { TypedRequestBody } from '../../types';
const user = new User();

// @desc    Get logged user
// @route   GET /api/user
// @access  Privet
const getLoggedUser = asyncHandler(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  //   let logged = user.findById(req.userid!);
  client.query(`select * from users where userid='${req.userid!}'`, (err, resSQL) => {
    if (!resSQL || err) return next(new ErrorResponse(err.message, StatusCode.Error.NotFound));
    if (resSQL) return successResponse(req, res, { user: resSQL.rows }, StatusCode.Success.Created);
  });
});

// @desc    Get all songs
// @route   GET /api/user/favorites
// @access  Privet
const getFavoritesSongs = asyncHandler(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  client.query(
    `select u.userid,s.songid,u.email , u.is_premium ,s.title, s.duration, s.releaseYear from favorite f join songs s on s.songid =f.songid join users u on u.userid =f.userid where u.userid='${req.userid}'`,
    (err, resSQL) => {
      if (!resSQL || err) return next(new ErrorResponse(err.message, StatusCode.Error.NotFound));
      if (resSQL) return successResponse(req, res, { user: resSQL.rows }, StatusCode.Success.OK);
      //   else if (!resSQL.rowCount) return next(new ErrorResponse(`No Items In The Favorite Table`, StatusCode.Error.BadRequest));
    },
  );
});

// @desc    create/add song to favorite
// @route   POST /api/user/favorite/:song
// @access  Privet
const addFavoritesSong = asyncHandler(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  //chack if primuim
  client.query(
    `select u.is_premium, count(s.songid) as amount from favorite f
    join songs s on s.songid =f.songid
    join users u on u.userid =f.userid
    where u.userid='${req.userid}'
    group by u.is_premium`,
    (err, resSQL) => {
      if (!resSQL || err) return next(new ErrorResponse(err.message, StatusCode.Error.NotFound));
      if (!isEmpty(resSQL.rows)) {
        //chack user not-primum and limited to 20 songs
        if (!resSQL.rows[0].is_premium && resSQL.rows[0].amount >= 20)
          return next(new ErrorResponse(`Not Premium User Is limited to 20 songs`, StatusCode.Error.Unauthorized));
        //chack if song is is alrady exists
        client.query(`select * from favorite where userid='${req.userid}' and songid='${req.params.song}'`, (errFind, resSQLFind) => {
          if (!resSQLFind || errFind) return next(new ErrorResponse(errFind.message, StatusCode.Error.NotFound));
          if (resSQL.rows[0]) return next(new ErrorResponse(`Song is allday exits in favorites`, StatusCode.Error.NotFound));
        });
      }
    },
  );
  // push to favorites
  client.query(`INSERT INTO favorite (userid, songid) VALUES (${req.userid}, ${req.params.song})`, (errCreate, resSQLCreate) => {
    if (!resSQLCreate || errCreate) return next(new ErrorResponse(errCreate.message, StatusCode.Error.BadRequest));
    if (resSQLCreate)
      return successResponse(req, res, { user: { command: resSQLCreate.command, rowCount: resSQLCreate.rowCount } }, StatusCode.Success.Created);
  });
});

// @desc   remove song to favorite
// @route   DELETE /api/user/favorite/:song
// @access  Privet
const removeFavorites = asyncHandler(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  client.query(`DELETE FROM favorite WHERE userid='${req.userid}' and songid='${req.params.song}'`, (err, resSQL) => {
    if (!resSQL || err) return next(new ErrorResponse(err.message, StatusCode.Error.NotFound));
    if (resSQL.rows) {
      return successResponse(req, res, { user: { command: resSQL.command, rowCount: resSQL.rowCount } }, StatusCode.Success.OK);
    }
  });
});

// @desc    create/add song to favorite
// @route   POST /api/user/favorite/:song
// @access  Privet
// TypedRequestBody<{ username: string, password: string }
const FavoritesSong = asyncHandler(
  async (req: TypedRequestBody<{ username: string; password: string }>, res: Response, next: NextFunction): Promise<void> => {
    return;
  },
);

export default { getLoggedUser, getFavoritesSongs, addFavoritesSong, removeFavorites };
