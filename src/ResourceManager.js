import React, { Component } from "react";
import * as Resources from "./Resources";

const IMG_HEIGHT = 30;

class ResourceManager extends Component {
  resources = Resources.one();
  diff = Resources.zero();

  constructor() {
    super();
    this.state = {
      resources: {
        ...this.resources,
      },
    };
  }

  increaseOrDecreaseResource = (resourceName, delta) => () => {
    const resources = this.state.resources;
    const newAmount = resources[resourceName] + delta;
    if (Resources.MIN <= newAmount && newAmount <= Resources.MAX) {
      this.diff[resourceName] += delta;
      this.setState({
        resources: {
          ...resources,
          [resourceName]: newAmount,
        },
      });
    }
  };

  accept = () => {
    this.resources = { ...this.state.resources };
    this.diff = Resources.zero();
  };

  cancel = () => {
    this.diff = Resources.zero();
    this.setState({
      resources: {
        ...this.resources,
      },
    });
  };

  getButtonStyle = () =>
    `Button ${Resources.isZero(this.diff) ? "ButtonInactive" : "ButtonActive"}`;

  drawPlusMinusControl = (resourceName) => (
    <div key={resourceName} className="PlusMinusBox">
      <div className="ResourcePicture">
        <img
          src={`./images/${resourceName}.png`}
          alt={resourceName}
          height={IMG_HEIGHT}
        />
      </div>
      <div className="ResourceValue">
        <h2>{this.state.resources[resourceName]}</h2>
      </div>
      <button
        className="PlusMinusButton"
        onClick={this.increaseOrDecreaseResource(resourceName, -1)}
      >
        -
      </button>
      <button
        className="PlusMinusButton"
        onClick={this.increaseOrDecreaseResource(resourceName, +1)}
      >
        +
      </button>
    </div>
  );

  drawPlusMinusControls = () => (
    <div>
      {Object.keys(this.state.resources).map((resource) =>
        this.drawPlusMinusControl(resource)
      )}
    </div>
  );

  drawText = () => (
    <div>
      <p>{Resources.toString(this.diff)}</p>
    </div>
  );

  drawButtons = () => (
    <div className="Buttons">
      <div className={this.getButtonStyle()} onClick={this.accept}>
        Accept
      </div>
      <div className={this.getButtonStyle()} onClick={this.cancel}>
        Cancel
      </div>
    </div>
  );

  render = () => (
    <div>
      {this.drawPlusMinusControls()}
      {this.drawText()}
      {this.drawButtons()}
    </div>
  );
}

export default ResourceManager;
