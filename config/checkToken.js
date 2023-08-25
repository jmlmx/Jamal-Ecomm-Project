const jwt = require('jsonwebtoken')

module.exports = function(req, res, next) {
    let token = req.get('Authorization') || req.query.token // using "req.get" to retrieve the authorization header or grab the token from 
    if (token) {
        token = token.replace('Bearer ', '');
        // Check if token is valid and not expired
        jwt.verify(token, process.env.SECRET_KEY, function(err, decoded) {
          req.user = err ? null : decoded.user;
          // Can remove this...
          // If your app doesn't care
          req.exp = err ? null : new Date(decoded.exp * 1000);
        });
        return next();
        } else {
        // No token was sent
        req.user = null;
        return next();
      }
    };