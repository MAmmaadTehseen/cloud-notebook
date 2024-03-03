const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const User = require('../models/User')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
var fetchuser = require('../Middleware/fetchuser');
const jwT_Secret = "ammadisagoodb$oy";

// creating a route using post :/api/auth/createUser
router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password').isLength({ min: 8 })
], async (req, res) => {
    const error = validationResult(req);
    //checking for errors
    if (!error.isEmpty()) {
        return res.status(400).json(({ errors: error.array() }))
    }
    try {
        // check if the user exists
        let user = await User.findOne({ email: req.body.email })
        if (user) {
            return res.status(400).json({ error: "Sorry a user with same email already exists" })
        }
        // encripting the password
        const salt = await bcrypt.genSalt(10);
        const pass = await bcrypt.hash(req.body.password, salt)
        //create auser using post
        user = await User.create({

            name: req.body.name,
            email: req.body.email,
            password: pass
        })
        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, jwT_Secret);

        // res.json(user)
        res.json({ authToken })
    }
    catch (err) {
        console.error(error.message);
        res.status(500).send("Some error occured")
    }
})
// creating a route using post :/api/auth/login
router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'password cannot be blank').exists()
], async (req, res) => {
    const error = validationResult(req);

    //check for error
    if (!error.isEmpty()) {
        return res.status(400).json(({ errors: error.array() }))
    }
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: 'use right credentials' })
        }
        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            return res.status(400).json({ error: 'use right credentials' })

        }
        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, jwT_Secret);
        res.json({ authToken })
    }
    catch (err) {
        console.error(error.message);
        res.status(500).send("Try again Some error occured")
    }
})

// creating a route  for loging using post :/api/auth/getUser
router.post('/getUser', fetchuser, async (req, res) => {
    try {
        userId = req.user.id;
        const user = await User.findById(userId).select("-password");
        res.send(user)
    } catch (error) {
        console.error(error.message);
        res.status(500).send(" Try again Some error occured")
    }

})
module.exports = router