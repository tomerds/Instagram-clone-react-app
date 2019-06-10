import './Search.css';

import React from 'react';

import logo from '../../assets/iglogo.png';
import cam from '../../assets/instacamera.svg';

const SearchBar = () => {
  return (
    <div className="search-bar-wrapper">
      <div className="search-bar-left">
        <img src={cam} alt="insta-camera" className="insta-camera" />
        <img src={logo} className="insta-logo" alt="logo" />
      </div>
      <div className="search-bar-middle">
        <form>
          <input type="text" placeholder="Search" />
        </form>
      </div>
      <div className="search-bar-right">
        <div className="compass">C</div>
        <div className="heart">H</div>
        <div className="profile">P</div>
      </div>
    </div>
  )
}

export default SearchBar;