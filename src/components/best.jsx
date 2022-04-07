import React from "react";
import styled from 'styled-components';
import BestItem from "./bestitem";
import Footer from "../footer";

const Contents = styled.div`
 width:100%; 
 
`;

const BestBlock = styled.div`
 margin:0 auto; 
 width:1500px; padding:50px 0;
 
`;

function Best(){
    return(
    <div>
     <Contents>       
     <BestBlock>
      <BestItem />
      <BestItem />
      <BestItem />
      <BestItem />
      <BestItem />
      <BestItem />
      <BestItem />
      <BestItem />
      <BestItem />
      <BestItem />
      <BestItem />
      <BestItem />
      <BestItem />
      <BestItem />
      <BestItem />
     </BestBlock>
     </Contents>  
     <Footer/>
     </div> 
    );
}

export default Best;