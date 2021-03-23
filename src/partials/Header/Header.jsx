import React from "react";
import c from './Header.module.css';

const Header = () => {
  return (
    <header className={c.header}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Pornhub-logo.svg/1024px-Pornhub-logo.svg.png"></img>
      <div className={c.name}>Goncharov Nikita</div>
    </header>
      // <header className="header">
  );
};

export default Header;
