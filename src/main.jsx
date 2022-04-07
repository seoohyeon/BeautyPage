import React from "react";
import styled from 'styled-components';
import Footer from "./footer";
import styles from "./main.module.css";

const MainImg = styled.div`
  width:100%; height:300px;
  background-color:skyblue;
`

function MainCom(){
    return(
    <div>
       <MainImg/>

       <div className={styles.contents}>
           <div className={styles.con1}></div>
           <div className={styles.con2}></div>
           <div className={styles.con3}></div>
           <div className={styles.con4}></div>
       </div> 
       
       <Footer/>
    </div>
    );
}

export default MainCom;