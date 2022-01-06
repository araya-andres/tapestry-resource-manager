import React, { Component } from "react";
import * as resources from "./Resources";

const MIN = 0;
const MAX = 8;
const IMG_HEIGHT = 30;

class ResourceManager extends Component {
  resources = resources.one();
  diff = resources.zero();

  constructor() {
    super();
    this.state = {
      resources: {
        ...this.resources,
      },
      hasChanged: false,
    };
  }

  increaseOrDecreaseResource = (resourceName, delta) => () => {
    const resources = this.state.resources;
    const newAmount = resources[resourceName] + delta;
    if (MIN <= newAmount && newAmount <= MAX) {
      this.diff[resourceName] += delta;
      this.setState({
        resources: {
          ...resources,
          [resourceName]: newAmount,
        },
        hasChanged: !resources.isZero(this.diff),
      });
    }
  };

  accept = () => {
    this.resources = { ...this.state.resources };
    this.diff = resources.zero();
    this.setState({
      hasChanged: false,
    });
  };

  cancel = () => {
    this.diff = resources.zero();
    this.setState({
      resources: {
        ...this.resources,
      },
      hasChanged: false,
    });
  };

  getButtonStyle = () =>
    `Button ${this.state.hasChanged ? "ButtonActive" : "ButtonInactive"}`;

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
      {Object.keys(this.state.resources).map((resource) =>
        this.drawPlusMinusControl(resource)
      )}
      <div>
        <p>{resources.asString(this.diff)}</p>
      </div>
      <div>{this.drawButtons()}</div>
    </div>
  );
}

export default ResourceManager;
