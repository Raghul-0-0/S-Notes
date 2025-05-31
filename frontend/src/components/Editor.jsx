import styles from "../css/Editor.module.css"
import { useState } from "react"
import axios from 'axios';

const Editor = () => {

    const [showNewNote,setShowNewNote] = useState(false)
    const [noteContent,setNoteContent] = useState("")
    const [noteId,setNoteId] = useState(1)

    const createNewNote = () =>{
        console.log("button pressed")
        setShowNewNote(true);
    }

    const closeNote = () => {
        setShowNewNote(false);
    }

    const postNoteContent = (e) => {
        e.preventDefault();

        if (noteContent.trim() === "") return alert("Note cannot be empty.");

        axios.post("http://localhost:3000/api/Notes/postNote",
                    {noteId:noteId,
                     noteContent : noteContent
                    }
        ).then(res => {
            console.log("Note saved", res.data);
            setNoteId(prevNoteId => prevNoteId + 1)
        }).catch(err => {
            console.log("curr node id : ",noteId);
            console.error("Error saving note", err);
        });
    }

    return (

        <div className={styles.editor}>

            {
            (showNewNote) ? 
            (<button className={styles.closeNoteButton} onClick={closeNote}>Close Note</button>):
            (<button className={styles.newNoteButton} onClick={createNewNote}>New Note</button> )
            }
        
            <h1>this is the editor</h1>

            {showNewNote &&

            <form onSubmit={postNoteContent}>
                <textarea
                    value={noteContent}
                    onChange={ (e)=> setNoteContent(e.target.value) }
                    placeholder="Enter Your Text Here"
                /> 
            <button type="submit" className={styles.saveNoteButton}> Save Note</button>
            </form>
        
            }


        </div>
    )
}   

export default Editor;