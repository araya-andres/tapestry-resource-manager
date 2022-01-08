import React, { Component } from "react";
import * as Resources from "./Resources";
import Counter from "./Counter";

class ResourceManager extends Component {
  resources = Resources.ONE;
  diff = Resources.ZERO;

  constructor() {
    super();
    this.state = {
      resources: this.resources,
    };
  }

  increaseOrDecreaseResource = (resourceName, delta) => () => {
    const resources = this.state.resources;
    const newAmount = resources[resourceName] + delta;
    if (Resources.MIN <= newAmount && newAmount <= Resources.MAX) {
      this.diff = {
        ...this.diff,
        [resourceName]: this.diff[resourceName] + delta,
      };
      this.setState({
        resources: {
          ...resources,
          [resourceName]: newAmount,
        },
      });
    }
  };

  accept = () => {
    this.resources = this.state.resources;
    this.diff = Resources.ZERO;
    this.setState({
      resources: this.resources,
    });
  };

  cancel = () => {
    this.diff = Resources.ZERO;
    this.setState({
      resources: this.resources,
    });
  };

  getButtonStyle = () =>
    `Button ${Resources.isZero(this.diff) ? "ButtonInactive" : "ButtonActive"}`;

  drawCounters = () => (
    <div className="Counters">
      {Object.keys(this.state.resources).map((resource) =>
        Counter({
          name: resource,
          image: `./images/${resource}.png`,
          value: this.state.resources[resource],
          increase: this.increaseOrDecreaseResource(resource, 1),
          decrease: this.increaseOrDecreaseResource(resource, -1),
        })
      )}
    </div>
  );

  drawText = () => (
    <div className="Text">
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
    <div className="ResourceManager">
      {this.drawCounters()}
      {this.drawText()}
      {this.drawButtons()}
    </div>
  );
}

export default ResourceManager;
