import { Request, Response, NextFunction } from 'express';
import { successResponse, StatusCode, ErrorResponse, isEmpty } from '../../utils';
import { asyncHandler } from '../../middlewares/async';
import { client } from '../../sql/client';
import * as bcrypt from 'bcrypt';
import * as gravatar from 'gravatar';
import { getConfig } from '../../config';
import { createToken } from '../../utils';

// @desc    User login
// @route   POST /api/auth/login
// @access  Public
const login = asyncHandler(async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  if (!req.body.email || !req.body.password) return next(new ErrorResponse(`email\\password is missing`, StatusCode.Error.Unauthorized));
  const token = null;
  //find user
  client.query(`SELECT * FROM users WHERE email='${req.body.email}'`, async (err, resSQL) => {
    if (!resSQL || isEmpty(resSQL.rows) || err) return next(new ErrorResponse('email is not exist', StatusCode.Error.NotFound));
    else {
      let validPass = await bcrypt.compare(req.body.password, resSQL.rows[0].password);
      if (validPass) {
        //create token
        let token = createToken(resSQL.rows[0].userid, resSQL.rows[0].email, resSQL.rows[0].img, resSQL.rows[0].is_premium);
        return successResponse(req, res, { token }, StatusCode.Success.OK);
      } else return next(new ErrorResponse('password dont match', StatusCode.Error.BadRequest));
    }
  });
});

// @desc    User signing
// @route   POST /api/auth/signing
// @access  Public
const signing = asyncHandler(async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  //Defines the level of encryption
  console.log('req.body', req.body);
  if (!req.body.email || !req.body.password) return next(new ErrorResponse(`email\\password is missing`, StatusCode.Error.Unauthorized));
  if (req.body.password.length > 4) return next(new ErrorResponse(`password must be 4 digits long`, StatusCode.Error.BadRequest));

  let salt = await bcrypt.genSalt(Number(getConfig().SALT_KEY));
  req.body.password = await bcrypt.hash(req.body.password, salt);
  //Create avatar for photo:
  const img = gravatar.url(req.body.email, {
    s: '200',
    r: 'pg',
    d: 'mm',
  });
  req.body.img = img;

  client.query(`INSERT INTO Users (email, password,img) VALUES ('${req.body.email}', '${req.body.password}', '${req.body.img}')`, (err, resSQL) => {
    if (!resSQL || err) return next(new ErrorResponse(err.message, StatusCode.Error.NotFound));
    if (resSQL) return successResponse(req, res, { user: { resSQL } }, StatusCode.Success.Created);
  });
});

// @desc    User logout
// @route   POST /api/auth/logout
// @access  Public
const logout = asyncHandler(async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  return;
});

export default { login, logout, signing };
