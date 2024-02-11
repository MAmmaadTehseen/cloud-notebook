const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const User = require('../models/User')
const bcrypt = require('bcryptjs');

// creating a route
router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password').isLength({ min: 8 })
], async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json(({ errors: error.array() }))
    }
    try {
        // check if the user exists
        let user = await User.findOne({ email: req.body.email })
        if (user) {
            return res.status(400).json({ error: "sorry a user with same email already exists" })
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

        res.json({ "nice": "nice" })
    }
    catch (err) {
        console.error(error.message);
        res.status(500).send("some error occured")
    }
})
module.exports = router