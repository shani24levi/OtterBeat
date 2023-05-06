import express, { Router, Request, Response } from 'express';
import passport from 'passport';
import controller from './auth.controller';
const router: Router = express.Router();

router.route('/login').post(controller.login);
router.route('/signing').post(controller.signing);
router.route('/logout').post(controller.logout);

router.get('/google', passport.authenticate('google'), (req, res) => res.send(200));
router.get('/google/redirect', passport.authenticate('google'), (req, res) => res.send(200));

module.exports = router;
