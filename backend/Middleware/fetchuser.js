const jwt = require('jsonwebtoken');

const jwT_Secret = "ammadisagoodb$oy"

const fetchuser = (req, res, next) => {
    // get user from jwt token and append id
    const token = req.header('auth-token')
    if (!token) {
        res.status(401).send({ error: 'please authenticate using valid token' })
    }
    try {
        const data = jwt.verify(token, jwT_Secret);
        req.user = data.user;
        next()
    }
    catch (error) {
        res.status(401).send({ error: 'please authenticate using valid token' })

    }
}
module.exports = fetchuser