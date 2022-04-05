import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
// import styld from 'styled-components';
import MainCom from './main';
import Best from './components/best';
import About from './components/about';
import Brand from './components/brand';
import Coupon from './components/coupon';
import Event from './components/event';
//yarn add react-router-dom@5
//yarn add styled-components

// const Header = styled.div`
//  width:100%;
//  height:180px;
//  background-color:skyblue;
// `


function App() {
  return (
    <div>
      <div className='header'>
        <div className='h_top'>

        </div>
        <div className='h_bom'>
          <ul>
          <li><Link to='/'>홈</Link></li>
          <li><Link to='/components/best'>BEST</Link></li>
          <li><Link to='/components/about'>베리페리</Link></li>
          <li><Link to='/components/brand'>브랜드</Link></li>
          <li><Link to='/components/coupon'>쿠폰/혜택</Link></li>
          <li><Link to='/components/event'>이벤트</Link></li>
          </ul>
        </div>
      </div>
      <div>
        <Route path="/" exact={true} component={MainCom}/>
        <Route path="/components/best" component={Best}/>
        <Route path="/components/about" component={About}/>
        <Route path="/components/brand" component={Brand}/>
        <Route path="/components/coupon" component={Coupon}/>
        <Route path="/components/event"component={Event}/>
      </div>
    </div>
  );
}

export default App;
