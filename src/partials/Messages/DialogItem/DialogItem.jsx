import React from "react";
import { NavLink } from "react-router-dom";
import c from "./DialogItem.module.css";

const Dialog = (props) => {
  return (
    <li className={c.dialog}>
      <NavLink to={"/messages/" + props.id} activeClassName={c.active}>
        {props.name}
      </NavLink>
    </li>
  );
};

export default Dialog;
