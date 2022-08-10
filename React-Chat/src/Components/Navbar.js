import './Navbar.css';

import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
function Navbar() {
  const [sidebar, setSideBar] = useState(false)
  const showSidebar = () => { setSideBar(!sidebar); console.log(sidebar); }

  return (<>
    <div className="navbar">
      <div className="menu">
        <Link to="#" className="menu-bars"><MenuRoundedIcon onClick={showSidebar}></MenuRoundedIcon></Link>
      </div>

      <nav className={sidebar ? 'nav-menu-active' : 'nav-menu'}>
        <ul className="nav-menu-items">
          <li>
            <Link to="./">Chat</Link>
          </li>
          <li>
            <Link to="../Profile">Profile</Link>
          </li>
        </ul>
      </nav>

    </div></>
  );
}

export default Navbar;

//TODO: use json to display the list items