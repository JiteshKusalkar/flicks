const LocalAuth = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

const User = require('../models/user');

const passportJWT = require('passport-jwt');

const tokenKey = require('./tokenkey');

const ExtractJWT = passportJWT.ExtractJwt;
const JWTStrategy = passportJWT.Strategy;

const configAuth = require('./auth');

module.exports = (passport) => {
  passport.serializeUser((newUser, done) => {
    done(null, newUser.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });

passport.use('local-signup', new LocalAuth({
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true
    },
    function(req, email, password, done) {
        process.nextTick(function() {
        User.findOne({ 'local.email' :  email }, function(err, user) {
            if (err)
                return done(err);
            if (user) {
                return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
            } else {
                var newUser = new User();

                newUser.local.email    = email;
                newUser.local.password = newUser.generateHash(password);
                newUser.save(function(err) {
                    if (err)
                        throw err;
                    return done(null, newUser);
                });
            }
        });
        });
    }));


  passport.use('local-login', new LocalAuth({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
  }, (req, username, password, done) => {
    User.findOne({ 'local.username': username }, (err, user) => {
      if (err)
        return done(err);
      if (!user)
        return done(null, false);
      if (!user.validPassword(password, user))
        return done(null, false);
      return done(null, user);
    });
  }));

  passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderWithScheme('Authorization'),
    secretOrKey: tokenKey.secret
  }, (jwtpayload, cb) => {
    return User.findById(jwtpayload.id).then((user) => {
      return cb(null, user);
    }).catch((err) => {
      return cb(err);
    });
  }));

  passport.use(new GoogleStrategy({
      clientID        : configAuth.googleAuth.clientID,
      clientSecret    : configAuth.googleAuth.clientSecret,
      callbackURL     : configAuth.googleAuth.callbackURL,
  },
  function(token, refreshToken, profile, done) {
      process.nextTick(function() {
        User.findOne({ 'google.id' : profile.id }, function(err, user) {
              if (err)
                  return done(err);
              if (user) {
                return done(null, user);
              } else {
                  var newUser          = new User();

                  newUser.google.id    = profile.id;
                  newUser.google.token = token;
                  newUser.google.name  = profile.displayName;
                  newUser.google.email = profile.emails[0].value; // pull the first email

                  newUser.save(function(err) {
                      if (err)
                          throw err;
                      return done(null, newUser);
                  });
              }
          });
      });
  }));
};
