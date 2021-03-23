import React from "react";
import { NavLink } from "react-router-dom";
import c from "./Navigation.module.css";
import Friend from "./Friend/Friend";
  
const Navigation = (props) => {
  // debugger;
  let friendsJsx = props.state.friends.map(f => <Friend key={f.id} name={f.name} />);
  
  return (
    <nav className={c.nav}>
      <ul className="">
        <li><NavLink to="/profile" activeClassName={c.active}>Profile</NavLink></li>
        <li><NavLink to="/messages" activeClassName={c.active}>Messages</NavLink></li>
        <li><NavLink to="/settings" activeClassName={c.active}>Settings</NavLink></li>
        <li><NavLink to="/news" activeClassName={c.active}>News</NavLink></li>
        <li><NavLink to="/music" activeClassName={c.active}>Music</NavLink></li>
      </ul>
      <div className={c.friends}>
        {friendsJsx}
      </div>
    </nav>
  );
};

export default Navigation;