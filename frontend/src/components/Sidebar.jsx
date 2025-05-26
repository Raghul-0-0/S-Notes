import styles from "../css/Sidebar.module.css"

const Sidebar = () =>{

    return(
            <div className={styles.sidebar}>
                <ul>
                    <li>SideBar</li>
                    <li>heading 1</li>
                    <li>heading 2</li>
                    <li>heading 3</li>
                    <li>heading 4</li>
                    <li>heading 5</li>
                    <li>heading 6</li>
                </ul>
            </div>
    )
}

export default Sidebar