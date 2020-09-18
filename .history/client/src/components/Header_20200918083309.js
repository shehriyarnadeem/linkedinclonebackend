import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import PeopleIcon from "@material-ui/icons/PeopleAltRounded";
import Jobs from "@material-ui/icons/ShoppingBasketOutlined";
import MessageIcon from "@material-ui/icons/MessageOutlined";
import SearchIcon from "@material-ui/icons/Search";
import NotificationIcon from "@material-ui/icons/NotificationImportantOutlined";
import AppsIcon from "@material-ui/icons/AppsOutlined";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src="https://img.icons8.com/color/48/000000/linkedin.png" />
        <div className="header__search">
          <SearchIcon />
          <input placeholder="Search" />
        </div>
      </div>

      <div className="header__menu">
        <HomeIcon />
        <PeopleIcon />
        <Jobs />
        <MessageIcon />
        <NotificationIcon />

        {/* Home icon */}
        {/* network icon */}
        {/* Jobs */}
        {/* Messaging */}
        {/* Notifications */}
      </div>

      <div className="header__right">
        <AppsIcon />

        {/* Home icon */}
        {/* network icon */}
        {/* Jobs */}
        {/* Messaging */}
        {/* Notifications */}
      </div>
    </div>
  );
}

export default Header;
