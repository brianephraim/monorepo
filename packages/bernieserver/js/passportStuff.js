module.exports = function(c){
  var FACEBOOK_APP_SECRET = process.env.FACEBOOK_APP_SECRET;
  var express = require('express');
  //======
  //======
  var passport = require('passport');
   var util = require('util')
    , FacebookStrategy = require('passport-facebook').Strategy
    , logger = require('morgan')
    , session = require('express-session')
    , bodyParser = require('body-parser')
    , cookieParser = require('cookie-parser')
    , methodOverride = require('method-override');

  var FACEBOOK_APP_ID = "1633460223596071"

  // Simple route middleware to ensure user is authenticated.
//   Use this route middleware on any resource that needs to be protected.  If
//   the request is authenticated (typically via a persistent login session),
//   the request will proceed.  Otherwise, the user will be redirected to the
//   login page.
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login')
}

  // Passport session setup.
  //   To support persistent login sessions, Passport needs to be able to
  //   serialize users into and deserialize users out of the session.  Typically,
  //   this will be as simple as storing the user ID when serializing, and finding
  //   the user by ID when deserializing.  However, since this example does not
  //   have a database of user records, the complete Facebook profile is serialized
  //   and deserialized.
  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(obj, done) {
    done(null, obj);
  });


  // Use the FacebookStrategy within Passport.
  //   Strategies in Passport require a `verify` function, which accept
  //   credentials (in this case, an accessToken, refreshToken, and Facebook
  //   profile), and invoke a callback with a user object.
  passport.use(new FacebookStrategy({
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: "http://localhost.bernieselfie.com:5000/auth/facebook/callback"
    },
    function(accessToken, refreshToken, profile, done) {
      // asynchronous verification, for effect...
      process.nextTick(function () {
        
        // To keep the example simple, the user's Facebook profile is returned to
        // represent the logged-in user.  In a typical application, you would want
        // to associate the Facebook account with a user record in your database,
        // and return that user instead.
        profile.accessToken = accessToken;
        profile.refreshToken = refreshToken;
        return done(null, profile);
      });
    }
  ));




  c.app.use(logger());
  c.app.use(cookieParser());
  c.app.use(bodyParser());
  c.app.use(methodOverride());
  c.app.use(session({ secret: 'keyboard cat' }));
  // Initialize Passport!  Also use passport.session() middleware, to support
  // persistent login sessions (recommended).
  c.app.use(passport.initialize());
  c.app.use(passport.session());
  c.app.use(express.static(__xdirname + '/public'));




  c.app.get('/account', ensureAuthenticated, function(req, res){
    res.render('account', { user: req.user });
  });

  c.app.get('/login', function(req, res){
    res.render('login.ejs', { user: req.user });
  });

  // GET /auth/facebook
  //   Use passport.authenticate() as route middleware to authenticate the
  //   request.  The first step in Facebook authentication will involve
  //   redirecting the user to facebook.com.  After authorization, Facebook will
  //   redirect the user back to this application at /auth/facebook/callback
  c.app.get('/auth/facebook',
    passport.authenticate('facebook',{ scope: ['user_photos','publish_actions','email'] }),
    function(req, res){
      // The request will be redirected to Facebook for authentication, so this
      // function will not be called.
    });

  // GET /auth/facebook/callback
  //   Use passport.authenticate() as route middleware to authenticate the
  //   request.  If authentication fails, the user will be redirected back to the
  //   login page.  Otherwise, the primary route function function will be called,
  //   which, in this example, will redirect the user to the home page.
  c.app.get('/auth/facebook/callback', 
    passport.authenticate('facebook', { failureRedirect: '/login' }),
    function(req, res) {
      res.redirect('/');
    });

  c.app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });
};