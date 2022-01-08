import React from "react";
import "./Counter.css";

function Counter(args) {
  const description = args.hasOwnProperty("image") ? (
    <img src={args.image} alt={args.name} />
  ) : (
    <p>{args.name}</p>
  );
  return (
    <div key={args.name} className="Counter">
      <div className="Description">{description}</div>
      <div className="Value">
        <h2>{args.value}</h2>
      </div>
      <div className="Buttons">
        <button className="Button" onClick={args.decrease}>
          -
        </button>
        <button className="Button" onClick={args.increase}>
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
