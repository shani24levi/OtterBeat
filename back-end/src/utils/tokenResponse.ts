import jwt from 'jsonwebtoken';
import { getConfig } from '../config';
const TOKEN = getConfig().DB;

//Create token. function is called at the moment of user login req.
//returns the generat token jibrish
//We want the token to be a token for a long time to make it easier for adults to logIn
//or you can login with Google to solve it
//Token is valid for a 30 days
const createToken = (userid: string, email: string, img: string, is_premium: Boolean): string => {
  return jwt.sign({ userid, email, img, is_premium }, `${TOKEN}`, { expiresIn: '30d' });
};

export { createToken };
