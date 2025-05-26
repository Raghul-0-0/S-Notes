import styles from "../css/Editor.module.css"
import { useState } from "react"

const Editor = () => {

    const [showNewNote,setShowNewNote] = useState(true)

    return (

        <div className={styles.editor}>

            <button>New Note</button>

            <h1>this is the editor</h1>

            <div className={styles.text}>
                <h1 style={{opacity:0.4}}>Type your Text here</h1>
            </div>

        </div>
    )
}   

export default Editor;