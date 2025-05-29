const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
    let token = req.header('Authorization')
    if(token){
        token = token.replace('Bearer ', ''); //remove the Bearer prefix
    }
    
    console.log(token)

    if (!token) {
        return res.status(401).json('Access denied');
    }

    try {
        const decoded = jwt.verify(token, '123456');
        req.userId = decoded.userId;
        next();
    } catch (error) {
        res.status(401).json('Invalid token');
    }
};

module.exports = verifyToken;