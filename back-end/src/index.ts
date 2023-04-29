import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors';
import 'colorts/lib/string';
import { errorHandler } from './middlewares/err';
// import songsRouter from './api/songs/song.route';

const app: Application = express();
app.use(express.json());
app.use(cors());

// Load env vars
dotenv.config({ path: path.join(__dirname, '..', '.env') });

// Route middleware
app.get('/', (req: Request, res: Response) => {
  res.send('Server is up and running');
});
const songsRouter = require('./api/songs/song.route');
app.use('/api/songs', songsRouter);

//middleware for catch 500-400 errors
app.use(errorHandler);

//create api lister
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.underline.blue.bold);
});
