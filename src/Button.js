import React from "react";
import "./Button.css";

const Button = (props) => (
  <div
    className={`Button ${props.active ? "Active" : "Inactive"}`}
    onClick={props.callback}
  >
    {props.label}
  </div>
);

export default Button;
