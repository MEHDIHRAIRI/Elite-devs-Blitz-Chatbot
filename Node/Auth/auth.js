const passport = require('passport');
/* const bcrypt = require('bcryptjs');
const User = require('../models/user');
const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth').OAuthStrategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const TwitterStrategy = require('passport-twitter').Strategy;

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

// Local Strategy
passport.use(
  new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
    // Match User
    User.findOne({ email: email })
      .then((user) => {
        // Create new User
        if (!user) {
          const newUser = new User({ email, password });
          // Hash password before saving in database
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;
              newUser.password = hash;
              newUser
                .save()
                .then((user) => {
                  return done(null, user);
                })
                .catch((err) => {
                  return done(null, false, { message: err });
                });
            });
          });
          // Return other user
        } else {
          // Match password
          bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) throw err;

            if (isMatch) {
              return done(null, user);
            } else {
              return done(null, false, { message: 'Wrong password' });
            }
          });
        }
      })
      .catch((err) => {
        return done(null, false, { message: err });
      });
  })
);
// Use the GoogleStrategy within Passport.
passport.use(
  new GoogleStrategy(
    {
      consumerKey:
        '321353180877-9e53hr8ci22mlaa5sksoa5il149vdijj.apps.googleusercontent.com',
      consumerSecret: 'GzkbaOnGRmOoGroIIe5iXKIv',
      callbackURL: 'http://localhost:3000/google/callback',
    },
    function (token, tokenSecret, profile, done) {
      User.findOrCreate({ googleId: profile.id }, function (err, user) {
        return done(err, user);
      });
    }
  )
);

// Use the Facebook Strategy within Passport.

passport.use(
  new FacebookStrategy(
    {
      clientID:
        '321353180877-9e53hr8ci22mlaa5sksoa5il149vdijj.apps.googleusercontent.com',
      clientSecret: 'GzkbaOnGRmOoGroIIe5iXKIv',
      callbackURL: 'http://localhost:3000/facebook/callback',
    },
    function (accessToken, refreshToken, profile, done) {
      User.findOrCreate({ facebookId: profile.id }, function (err, user) {
        if (err) {
          return done(err);
        }
        done(null, user);
      });
    }
  )
);

// Use the Twitter Strategy within Passport.
passport.use(
  new TwitterStrategy(
    {
      consumerKey:
        '321353180877-9e53hr8ci22mlaa5sksoa5il149vdijj.apps.googleusercontent.com',
      consumerSecret: 'GzkbaOnGRmOoGroIIe5iXKIv',
      callbackURL: 'http://localhost:3000/twitter/callback',
    },
    function (token, tokenSecret, profile, done) {
      User.findOrCreate({ twitterId: profile.id }, function (err, user) {
        if (err) {
          return done(err);
        }
        done(null, user);
      });
    }
  )
);
module.exports = passport;
 */
