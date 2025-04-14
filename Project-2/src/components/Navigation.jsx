// we can use one extension React snippet ES7 which helps to generate small snippest anmd help to faster and smooth the coding expoerince.
// to generate below commented basic snippet: rfce is the code

import styles from "./Navigation.module.css";
const Navigation = () =>{
    console.log(styles);
    return(
        <div className="container">
           
            <nav className={styles.navigation}>
                <div className="logo">
                <img src="/images/Frame 2 1.png" alt="Frame" />

                </div>
                <ul >
                    <li >Home</li>
                    <li >About</li>
                    <li >Contact</li>
                </ul>
            </nav>
        </div>
    );
}
export default Navigation