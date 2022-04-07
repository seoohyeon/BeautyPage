import React from "react";
import CouponItem from "./couponitem";
import styled from 'styled-components';
import LoginForm from '../login';
import Footer from "../footer";

const Coupons = styled.div`
  width:100%; height:1000px; 
  background-color:#ccc;
`
const InBox = styled.div`
  margin:0 auto;
  width:1000px; 
  height:auto;
 `



function Coupon(){
  const coupons = [
    {
      id: 1,
      name: '할인쿠폰',
      sell: '5,000원',
      comment: '20,000만원원 이상 결제시'
    },
    {
      id: 2,
      name: '생일쿠폰',
      sell: '10%',
      comment: '20,000만원원 이상 결제시'
    },
    {
      id: 3,
      name: '생일쿠폰',
      sell: '7,000원',
      comment: '20,000만원원 이상 결제시'
    },
    {
      id: 4,
      name: '생일쿠폰',
      sell: '20%',
      comment: '20,000만원원 이상 결제시'
    }
  ];
return(
<div>
  <Coupons>
    <LoginForm/>
    <InBox>
          <CouponItem coupon={coupons[0]} />
          <CouponItem coupon={coupons[1]} />
          <CouponItem coupon={coupons[2]} />
          <CouponItem coupon={coupons[3]} />
    </InBox>
  </Coupons>
  <Footer/>
</div>
);
}

export default Coupon;