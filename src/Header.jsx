import React from "react";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png" alt="" />

        <div className="header_search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>

      <div className="header_right">

      </div>
    </div>
  );
}

export default Header;
