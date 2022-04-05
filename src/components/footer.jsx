import React from "react";
import styled from 'styled-components';

const FooterBlcock = styled.div`
  width:100%; height:250px; 
  background-color:#666;
  color:#1f1f1f;
`


function Footer(){
 return(
    <div style={{height:'400px'}}>
        <FooterBlcock>하단내용</FooterBlcock> 
    </div>
 )
}

export default Footer;