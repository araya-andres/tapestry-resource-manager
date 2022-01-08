import React from "react";
import "./Counter.css";

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
        <button className="Button" onClick={props.decrease}>
          -
        </button>
        <button className="Button" onClick={props.increase}>
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
