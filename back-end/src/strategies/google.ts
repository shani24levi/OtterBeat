import passport from 'passport';
import { Strategy as GoogleStrategy, VerifyCallback, Profile } from 'passport-google-oauth20';
import { getConfig } from '../config';

passport.use(
  new GoogleStrategy(
    {
      clientID: getConfig().GOOGLE_CLIENT_ID!,
      clientSecret: getConfig().GOOGLE_CLIENT_SECRET!,
      callbackURL: getConfig().GOOGLE_REDIRECT_URL!,
      scope: ['email', 'profile'],
    },
    async (accessToken: string, refreshToken: string, profile: Profile, done: VerifyCallback) => {
      console.log(accessToken);
      console.log(profile);
      done(null, { username: profile.displayName });
    },
  ),
);
