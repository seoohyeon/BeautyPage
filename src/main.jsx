import React from "react";
import styles from './main.module.css';
import Footer from "./components/footer";

function MainCom(){
    return(
       <>
        <div className={styles.contents}>
            <div className={styles.contents_in}>
                <div className={styles.con}>con1</div>
                <div className={styles.con}>con1</div>
                <div className={styles.con}>con1</div>
                <div className={styles.con}>con1</div>
            </div>
        </div>
        <Footer/>
        </> 
    )
}

export default MainCom;