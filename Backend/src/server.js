require('dotenv').config();
const express = require('express');
const { CURSOR_FLAGS } = require('mongodb');
const app = express();
const mongoose = require('mongoose');
const noteSchema = require('../models/notesSchema');
const PORT = process.env.PORT ;
const DB_STRING = process.env.DB_URL;

// connect to DB
app.use(express.json());

mongoose
.connect(DB_STRING)
.then( ()=> {console.log("Connected to database :", mongoose.connection.name)})
.catch( (err)=>{console.log(err)})

app.get("/", (req,res)=>{
    res.send("hello postman ")
})


// to save a note
app.post("/notesave", async(req,res)=>{

    try{
        const{noteId,noteContent} =req.body;
        const newNote = new noteSchema({
            noteId:noteId,
            noteContent:noteContent
        })
        await newNote.save()
        console.log("Note saved !!! nodeid : ", noteId);
        res.json(newNote)
    }
    catch(err){
        console.log("error occured : " , err);
        res.status(400).json({message:"notesave unsuccessful"})
    }
})

app.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
})
  