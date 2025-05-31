const express = require('express')
const router =  express.Router()
const {saveNote,getNote} = require('../controllers/noteController.js')

router.post("/notes/postNote",saveNote)
router.get("/notes/getNote/:id",getNote)

module.exports = router