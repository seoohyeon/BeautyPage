import React from "react";
import styled from 'styled-components';

const CouponBlock = styled.div`
 float:left; margin:15px;
 width:470px; height:230px;
 border:1px solid #000; 
 box-sizing:border-box;
`

function CouponItem({ coupon }){
  return (
    <CouponBlock>
      <div>
        <b>{coupon.name}</b> 
        <h3>{coupon.sell}</h3>
        <p>({coupon.comment})</p>
      </div>
      
    </CouponBlock>
  );
}

export default CouponItem;