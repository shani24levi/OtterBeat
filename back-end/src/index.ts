import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import 'colorts/lib/string';
import passport from 'passport';
import { errorHandler } from './middlewares/err';
import { dbConnect } from './sql/client.connect';
import { getConfig } from './config';

const songsRouter = require('./api/songs/song.route');
const authRouter = require('./api/auth/auth.router');
const userRouter = require('./api/user/user.route');
const likesRouter = require('./api/likes/likes.router');
require('./strategies/google');

const app: Application = express();
app.use(express.json());
app.use(cors());
app.use(passport.initialize());

//connect to db
dbConnect();

// Route middleware
app.get('/test', (req: Request, res: Response) => {
  res.send('Server is up and running');
});
app.use('/api/songs', songsRouter);
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);
app.use('/api/likes', likesRouter);

//middleware for catch 500-400 errors
app.use(errorHandler);

//create api lister
const PORT = getConfig().PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running in ${getConfig().NODE_ENV} mode on port ${PORT}`.underline.blue.bold);
});

process.on('uncaughtException', function (err) {
  console.log('eeeee', err);
});
