import React, { Component } from "react";

const MIN = 0;
const MAX = 8;
const IMG_HEIGHT = 30;

class ResourceManager extends Component {
  resources = {
    coin: 1,
    worker: 1,
    food: 1,
    culture: 1,
  };

  constructor() {
    super();
    this.state = {
      resources: {
        ...this.resources,
      },
      hasChanged: false,
    };
  }

  IncreaseOrDecreaseResource = (resourceName, delta) => () => {
    const resources = this.state.resources;
    const newAmount = resources[resourceName] + delta;
    if (MIN <= newAmount && newAmount <= MAX) {
      this.setState({
        resources: {
          ...resources,
          [resourceName]: newAmount,
        },
        hasChanged: this.resources[resourceName] !== newAmount,
      });
    }
  };

  Accept = () => {
    this.resources = { ...this.state.resources };
    this.setState({
      hasChanged: false,
    });
  };

  Cancel = () => {
    this.setState({
      resources: {
        ...this.resources,
      },
      hasChanged: false,
    });
  };

  MakePlusMinusControl = (resourceName) => (
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
        onClick={this.IncreaseOrDecreaseResource(resourceName, -1)}
      >
        -
      </button>
      <button
        className="PlusMinusButton"
        onClick={this.IncreaseOrDecreaseResource(resourceName, +1)}
      >
        +
      </button>
    </div>
  );

  GetButtonStyle = () =>
    `Button ${this.state.hasChanged ? "ButtonActive" : "ButtonInactive"}`;

  MakeButtons = () => (
    <div className="Buttons">
      <div className={this.GetButtonStyle()} onClick={this.Accept}>
        Accept
      </div>
      <div className={this.GetButtonStyle()} onClick={this.Cancel}>
        Cancel
      </div>
    </div>
  );

  render = () => (
    <div>
      {Object.keys(this.state.resources).map((resource) =>
        this.MakePlusMinusControl(resource)
      )}
      <div>{this.MakeButtons()}</div>
    </div>
  );
}

export default ResourceManager;
