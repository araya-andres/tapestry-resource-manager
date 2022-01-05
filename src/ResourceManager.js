import React, { Component } from "react";

const MIN = 0;
const MAX = 8;
const IMG_HEIGHT = 30;

const makeConstant = (value) => ({
  coin: value,
  worker: value,
  food: value,
  culture: value,
});

const zero = () => makeConstant(0);

const one = () => makeConstant(1);

const isZero = (resources) =>
  Object.values(resources).every((value) => value === 0);

class ResourceManager extends Component {
  resources = one();
  diff = zero();

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
      this.diff[resourceName] += delta;
      this.setState({
        resources: {
          ...resources,
          [resourceName]: newAmount,
        },
        hasChanged: !isZero(this.diff),
      });
    }
  };

  Accept = () => {
    this.resources = { ...this.state.resources };
    this.diff = zero();
    this.setState({
      hasChanged: false,
    });
  };

  Cancel = () => {
    this.diff = zero();
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
