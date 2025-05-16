import styles from "../css/Home.module.css"
const Home = () =>{

    return (
        <div className={styles.HomePage}>
            <h1 className="">this is the home page</h1>
            <div className={styles.sidebar}>
                <ul>
                    <li>Heading 1</li>
                    <li>Heading 2</li>
                    <li>Heading 3</li>
                    <li>Heading 4</li>
                </ul>
            </div>

        </div>

        
    )
} 

export default Home;
