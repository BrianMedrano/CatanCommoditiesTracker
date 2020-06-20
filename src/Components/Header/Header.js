import React from 'react';
import logo from './catanLogo.jpg';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <header className="row">
        <div className="col-md-5">
          <img src={logo} className="logo" alt="logo" />
        </div>
        <div className="col-md-7 mt-5 subtitle">Tracking commodity prices</div>
      </header>
    );
  }
}

export default Header;
