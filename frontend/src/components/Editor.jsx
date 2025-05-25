import styles from "../css/Home.module.css"

const Editor = () => {


    return (

        <div className={styles.editor}>
            <h1>this is the editor</h1>

            <div className={styles.textField}>
                <h1 style={{opacity:0.4}}>Type your Text here</h1>
            </div>

        </div>
    )
}   

export default Editor;