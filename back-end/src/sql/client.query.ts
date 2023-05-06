import { Request, Response, NextFunction } from 'express';
import { client } from './client';
import { QueryResult } from 'pg';
import { ErrorResponse, StatusCode } from '../utils';

type Table = 'users' | 'artist' | 'songs' | 'songslist' | 'likes' | 'favorite';
interface Query {
  table: Table;
  select: string | '*';
  where?: string;
}

// @desc   select
const select = async ({ table, select, where }: Query, next: NextFunction): Promise<QueryResult | void> => {
  client &&
    client.query('SELECT * FROM songs', (err, res) => {
      console.log(res);
      if (err) return next(new ErrorResponse('somt', StatusCode.Error.BadRequest));
      return res;
      //client.end();
    });
};

export default { select };
