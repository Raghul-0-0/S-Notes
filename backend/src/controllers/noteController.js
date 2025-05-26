const noteSchema = require('../models/notesSchema');


// to save a note
const saveNote =  async(req,res)=>{

    try{
        const{noteId,noteContent} =req.body;
        const newNote = new noteSchema({ 
            noteId:noteId,
            noteContent:noteContent
        })
        await newNote.save()
        console.log("Note saved !!! noteid : ", noteId);
        res.status(201).json(newNote)
    }
    catch(err){
        console.log("error occured : " , err);
        res.status(400).json({message:"notesave unsuccessful"})
    }
}

// to search a note

const getNote = async(req,res)=>{
    try{
        const {id} = req.params;
        const notes = await noteSchema.findOne({noteId:id})
        
        if (!notes) {
            return res.status(404).json({ message: "Note not found" });
        }
        res.status(201).json(notes);

    }
    catch(err){
        console.log("error occured : ",err)
        res.status(400).json({message:err.message})
    }
}

module.exports = { getNote, saveNote }