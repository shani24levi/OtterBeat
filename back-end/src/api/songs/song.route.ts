import express, { Router, Request, Response } from 'express';
import controller from './song.controller';
const router: Router = express.Router();

router.route('/').get(controller.getSongs);
router.route('/:artist_name').get(controller.getArtistSongs);
router.route('/favorites/:song').get(controller.getFavorites).post(controller.createFavorite).delete(controller.removeFavorites); //song = ID OR NAME

module.exports = router;
// export default router;
// export = router;
