import express, { Router, Request, Response } from 'express';
import controller from './song.controller';
import { cacheMiddleware, cacheMiddlewareRedis } from '../../middlewares/cache';

const router: Router = express.Router();

router.route('/').get(cacheMiddlewareRedis, controller.getSongs);
router.route('/:artist_name').get(controller.getArtistSongs);

module.exports = router;
