import React from 'react';
import { Route, Link } from 'react-router-dom';
//import styld from 'styled-components';
import './App.css';
import styles from './header.module.css';
import MainCom from './main';
import Best from './components/best';
import Brand from './components/brand';
import Coupon from './components/coupon';
import Event from './components/event';

//yarn add react-icons
//yarn add styled-components
//yarn add react-router-dom@5

function App() {
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.h_top}></div>
        <div className={styles.h_nav}>
          <ul>
            <li><Link to='/'>홈으로</Link></li>
            <li><Link to='/components/best'>BEST</Link></li>
            <li><Link to='/components/brand'>BRAND</Link></li>
            <li><Link to='/components/coupon'>COUPON</Link></li>
            <li><Link to='/components/event'>EVENT</Link></li>
          </ul>
        </div>
      </div>

      <div>
        <Route path="/" exact={true} component={MainCom}/>
        <Route path="/components/best" component={Best}/>
        <Route path="/components/brand" component={Brand}/>
        <Route path="/components/coupon" component={Coupon}/>
        <Route path="/components/event"component={Event}/>
      </div>
    </div>
  );
}

export default App;
