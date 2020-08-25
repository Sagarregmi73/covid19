import React from 'react';
import {NavLink} from 'react-router-dom';
const Header=()=>{
    return (
        <div>
<nav className="navbar navbar-inverse ">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>                        
      </button>
      <NavLink className="navbar-brand " to="/">Covid19 Tracker</NavLink>
    </div>
    <div className="collapse navbar-collapse" id="myNavbar">
      <ul className="nav navbar-nav">
        <li className="active"><NavLink to="/">Home</NavLink></li>
        <li><NavLink  to="/nepal">Nepal</NavLink></li>
        <li><NavLink to="/news">News</NavLink></li>
        
      </ul>
      
    </div>
  </div>
</nav>
  </div>
);
}

export default Header;