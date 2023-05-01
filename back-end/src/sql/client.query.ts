import { Request, Response, NextFunction } from 'express';
import { client } from './client';
import { QueryResult } from 'pg';
import { ErrorResponse, StatusCode } from '../utils';

interface Query {
  table: string;
  select: string | '*';
  where?: string;
}
// const isValidClient =() => {
//     client ? true : false
// }
// const asyncHandler = fn => (select:string, table:string,where:string, next: (...any: [...any])=>any) =>
//     Promise.resolve(fn(select, table,where, next)).catch(next);

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
