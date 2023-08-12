const jwt = require('jsonwebtoken')

module.exports = function(req, res, next) {
    let token = req.get('Authorization') || req.query.token // using "req.get" to retrieve the authorization header or grab the token from 
    if(!token) {
        req.user = null
        next()
    } else {
        token = token.replace('Bearer', '')
        try {
            jwt.verify(token, process.env.SECRET_KEY) // verify the token using the secret key in your .env file
            next()
        } catch (error) {
            res.status(401).json({msg: error.message})
        }
    }
}