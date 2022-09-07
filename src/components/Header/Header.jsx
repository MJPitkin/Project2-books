import React from "react";
import "./Header.css";
import {Link} from 'react-router-dom'

function Header() {
  return (
    <header>
      <h1><Link to='/' style={{textDecoration:'none', color:'#fec'}}>Online Library</Link></h1>
    </header>
  );
}

export default Header;
