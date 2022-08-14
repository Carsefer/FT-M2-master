import React from "react";
import Logo from "../logoHenry.png";
import SearchBar from "./SearchBar.jsx";
import a from "./Nav.module.css";

function Nav({ onSearch }) {
  return (
    <div className={a.nav}>
      <div className={a.xos}>
        <img src={Logo} alt="img not found" />

        <span>Henry Weather app</span>
      </div>
      <div className={a.barra}>
        <SearchBar className="search" onSearch={onSearch} />
      </div>
    </div>
  );
}

export default Nav;
