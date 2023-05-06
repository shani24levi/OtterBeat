import express, { Express, Router, Request, Response, IRouterHandler, RequestHandler } from 'express';
import controller from './user.controller';
import { protect, TokenRequest, authToken } from '../../middlewares/auth';

const router: Router = express.Router();

router.route('/').get(authToken, controller.getLoggedUser);
router.route('/favorites').get(authToken, controller.getFavoritesSongs);
router.route('/favorites/:song').post(authToken, controller.addFavoritesSong).delete(authToken, controller.removeFavorites); //song = ID

module.exports = router;
