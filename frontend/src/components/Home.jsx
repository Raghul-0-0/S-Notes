import styles from "../css/Home.module.css"
import Editor from "./Editor"
import Sidebar from "./Sidebar"


const Home = () =>{



    return (
        <div className={styles.HomePage}>

            <Sidebar/>

            {/* content section */}
            <div className={styles.content}>
                <Editor/>   
            </div>




        </div>

        
    )
} 

export default Home;
