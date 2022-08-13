import "./Navbar.css";

import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import Logout from "./Logout";

function Navbar() {
  const [sidebar, setSideBar] = useState(false);
  const showSidebar = () => {
    setSideBar(!sidebar);
    console.log(sidebar);
  };
  //const Logout = (async () => {
  //  const response = await fetch("http://localhost:4000/api/Logout", {
  //    method: "POST",
  //    headers: { "Content-Type": "application/json" },
  //    credentials: "include",
  //  });
  //  const info = await response.json();
  //  console.log(info);
  //})();

  return (
    <>
      <div className="navbar">
        <div className="menu">
          <Link to="#" className="menu-bars">
            <MenuRoundedIcon onClick={showSidebar}></MenuRoundedIcon>
          </Link>
        </div>

        <nav className={sidebar ? "nav-menu-active" : "nav-menu"}>
          <ul className="nav-menu-items">
            <li>
              <Link to="../Login" onClick={Logout}>
                Logout
              </Link>
            </li>
            <li>
              <Link to="../Login">Login</Link>
            </li>
            <li>
              <Link to="../Register">Register</Link>
            </li>
            <li>
              <Link to="./">Chat</Link>
            </li>
            <li>
              <Link to="../Profile">Profile</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;

//TODO: use json to display the list items
