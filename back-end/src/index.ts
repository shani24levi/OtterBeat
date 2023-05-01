import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import 'colorts/lib/string';
import { errorHandler } from './middlewares/err';
import { dbConnect } from './sql/client.connect';
import { getConfig } from './config';

const app: Application = express();
app.use(express.json());
app.use(cors());

//connect to db
dbConnect();

// Route middleware
app.get('/', (req: Request, res: Response) => {
  res.send('Server is up and running');
});
const songsRouter = require('./api/songs/song.route');
app.use('/api/songs', songsRouter);

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
