import { Client } from 'pg';
import { getConfig } from '../config';

export const client: Client = new Client({
  host: getConfig().DB_HOST,
  port: 5432,
  database: getConfig().DB,
  user: getConfig().DB_USER,
  password: getConfig().DB_PASSWORD,
});
