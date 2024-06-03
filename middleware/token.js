const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

dotenv.config
const TOKEN_SECRET = process.env.TOKEN_SECRET

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401)
    jwt.verify(token, TOKEN_SECRET, (err, user) => {
        if (err) {
            return res.sendStatus(403)
        } else {
            req.user = user
            //console.log(user)
            next() 
        }
    })
} 

module.exports = authenticateToken