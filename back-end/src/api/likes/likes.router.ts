import express, { Router, Request, Response } from 'express';
import controller from './likes.controller';
import { authToken } from '../../middlewares/auth';
const router: Router = express.Router();

router.route('/').get(controller.getLikesOfSongs);
router.route('/:id').post(authToken, controller.addLike).delete(authToken, controller.removeLike);

module.exports = router;
