import React from "react";
import "./Counter.css";
import Button from "./Button";

function Counter(props) {
  const description = props.hasOwnProperty("image") ? (
    <img src={props.image} alt={props.name} />
  ) : (
    <p>{props.name}</p>
  );
  return (
    <div className="Counter">
      <div className="Description">{description}</div>
      <div className="Value">
        <h2>{props.value}</h2>
      </div>
      <div className="Buttons">
        <Button
          label="-"
          callback={props.decrease}
          active="true"
          rounded="true"
        />
        <Button
          label="+"
          callback={props.increase}
          active="true"
          rounded="true"
        />
      </div>
    </div>
  );
}

export default Counter;
