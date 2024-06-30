var jwt = require('jsonwebtoken');

const authorizeAdmin = (req, res, next) => {
    const token = req.header['bearer-token'];
    if (!token) return res.status(401).json({status: 0, message: 'Access Denied'})

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        console.log(verified);
        console.log(req.user);
        if (req.user.role === 'admin' || req.user.role === 'seller' || req.user.role === 'butcher' || req.user.role === 'customer') {
            next();
        } else {
            res.status(403).json({status: 0, message: 'Forbiden'})
        }
    } catch (err) {
        res.status(400).json({status: 0, message: 'Invalid request'})
    }
} 

module.exports = authorizeAdmin;