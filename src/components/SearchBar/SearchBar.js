import './Search.css';

import { faCompass, faHeart, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import logo from '../../assets/iglogo.png';
import cam from '../../assets/instacamera.svg';


const SearchBar = (props) => {
  return (
    <div className="search-bar-wrapper">
      <div className="search-bar-left">
        <img src={cam} alt="insta-camera" className="insta-camera" />
        <img src={logo} className="insta-logo" alt="logo" />
      </div>
      <div className="search-bar-middle">
        <form>
          <input type="text" placeholder="Search" onKeyDown={props.search} />
        </form>
      </div>
      <div className="search-bar-right">
        <div className="fas faCompass">
          <FontAwesomeIcon icon={faCompass} />
        </div>
        <div className="heart"><FontAwesomeIcon icon={faHeart} /></div>
        <div className="profile"><FontAwesomeIcon icon={faUserCircle} /></div>
      </div>
    </div>
  )
}

export default SearchBar;