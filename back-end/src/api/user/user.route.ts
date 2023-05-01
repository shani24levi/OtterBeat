import express, { Router, Request, Response } from 'express';
// import controller from './song.c';
const router: Router = express.Router();

// router.route('/').get(controller.getLoggedUser);
// router.route('/favorites/:song').get(controller.getFavorites).post(controller.createFavorite).delete(controller.removeFavorites); //song = ID OR NAME

module.exports = router;
