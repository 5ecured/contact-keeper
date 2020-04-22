const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = function (req, res, next) {
    //Get token from the header
    const token = req.header('x-auth-token')

    //Check if no token
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' })
    }

    try {
        const decoded = jwt.verify(token, config.get('jwtSecret'))
        /* 
        At this stage, decoded contains the payload which is 
        const payload = {
            user: {
                id: user.id
            }
        }
        */

        //Then we assign that payload to the request object
        req.user = decoded.user

        next()
    } catch (error) {
        res.status(401).json({ msg: 'Token invalid' })
    }
}