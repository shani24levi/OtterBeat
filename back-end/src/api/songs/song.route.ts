import express, { Router, Request, Response } from 'express';
import controller from './song.controller';
const router: Router = express.Router();

router.route('/').get(controller.getSongs);
router.route('/:artist_name').get(controller.getArtistSongs);

module.exports = router;
