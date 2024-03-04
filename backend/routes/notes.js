const express = require('express');
const router = express.Router();
const Note = require('../models/Note')
const fetchuser = require('../Middleware/fetchuser');
const { body, validationResult } = require('express-validator');





//route1: get all the notes using get: /api/auth/fetchallnotes
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    const notes = await Note.find({ user: req.user.id })
    res.json(notes)
})


//route2: add notes using post: /api/auth/addnote
router.post('/addnote', fetchuser, [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'Enter a good description').isLength({ min: 5 }),
], async (req, res) => {

    try {
        const { title, description, tag } = req.body;
        //checking for errors
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.status(400).json(({ errors: error.array() }))
        }
        const notes = new Note({
            title, description, tag, user: req.user.id
        })
        const savednotes = await notes.save();
        res.json(savednotes)
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured")
    }
})


module.exports = router;