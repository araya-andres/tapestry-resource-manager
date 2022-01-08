import React from "react";
import "./Button.css";

const Button = (props) => (
  <div
    className={[
      "Button",
      props.active ? "Active" : "Inactive",
      props.rounded ? "Rounded" : "Squared",
    ].join(" ")}
    onClick={props.callback}
  >
    {props.label}
  </div>
);

export default Button;
