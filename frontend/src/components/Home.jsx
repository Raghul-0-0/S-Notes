import styles from "../css/Home.module.css"
const Home = () =>{

    return (
        <div className={styles.HomePage}>

            <div className={styles.sidebar}>
                <ul>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nobis earum consequatur impedit assumenda, quis dolorem sint sequi. Possimus error nam incidunt itaque rerum! Quis amet aspernatur ducimus excepturi officiis!</li>
                    <li>heading 2</li>
                    <li>heading 3</li>
                    <li>heading 4</li>
                    <li>heading 5</li>
                    <li>heading 6</li>
                </ul>
            </div>
            <div className={styles.content}>
                <h1>Content part</h1>
            </div>


        </div>

        
    )
} 

export default Home;
