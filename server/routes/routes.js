const User = require('../models/user');

const jwt = require('jsonwebtoken');

const tokenKey = require('../config/tokenkey');

module.exports = (app, passport) => {

  app.post('/flicks/user', (req, res) => {
    User.findOne({ 'local.username': req.body.username }, (err, user) => {
      if (err) {
        res.send(err);
      }
      if (user) {
        res.send('User already exists');
      } else {
        const newUser = new User();
        newUser.local.username = req.body.username;
        newUser.local.password = newUser.generateHash(req.body.password);
        newUser.save((saveerr) => {
          if (saveerr) {
            res.send(saveerr);
          }
          res.send(newUser);
        });
      }
    });
  });

  app.post('/flicks/login', (req, res) => {
    passport.authenticate('local-login', { session: false }, (err, user, info) => {
      if (err || !user) {
        return res.status(401).json({
          message: 'Invalid credentials',
          user
        });
      }

      const newUser = {
        id: user.id,
        username: user.username
      };
      const token = jwt.sign(newUser, tokenKey.secret);
      return res.json({ token });
    })(req, res);
  });

   /* POST login. */
    app.post('/flicks/signup', function (req, res) {
        passport.authenticate('local-signup', { session: false }, (err, user, info) => {
      if (err || !user) {
        return res.status(401).json({
          message: 'Invalid credentials',
          user
        });
      }

      const newUser = {
        id: user.id,
        username: user.username
      };
      const token = jwt.sign(newUser, tokenKey.secret);
      return res.json({ token });
    })(req, res);
    });

 app.get('/flicks/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }));

 app.get('/flicks/auth/google/callback', passport.authenticate('google', {failureRedirect : '/flicks/home'}),
     function(req, res){
            const newUser = {
              id:req.user.id,
              email:req.user.google.email
            }
            const token = jwt.sign(newUser, configJwt.secret);
            return res.json({"token":token});
  });

  app.get('/flicks', passport.authenticate('jwt'), (req, res) => {
    res.send('Book your flicks here');
  });

};
