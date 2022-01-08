import React, { Component } from "react";
import * as Resources from "./Resources";
import Counter from "./Counter";
import Button from "./Button";

class ResourceManager extends Component {
  resources = Resources.ONE;
  diff = Resources.ZERO;

  constructor() {
    super();
    this.state = {
      resources: this.resources,
    };
  }

  increaseBy = (resource, delta) => () => {
    const resources = this.state.resources;
    const newAmount = resources[resource] + delta;
    if (Resources.MIN <= newAmount && newAmount <= Resources.MAX) {
      this.diff = {
        ...this.diff,
        [resource]: this.diff[resource] + delta,
      };
      this.setState({
        resources: {
          ...resources,
          [resource]: newAmount,
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

  drawCounters = () => (
    <div className="Counters">
      {Object.keys(this.state.resources).map((resource) => (
        <Counter
          key={resource}
          name={resource}
          image={`./images/${resource}.png`}
          value={this.state.resources[resource]}
          increase={this.increaseBy(resource, 1)}
          decrease={this.increaseBy(resource, -1)}
        />
      ))}
    </div>
  );

  drawText = () => (
    <div className="Text">
      <p>{Resources.toString(this.diff)}</p>
    </div>
  );

  drawButtons = () => {
    const active = !Resources.isZero(this.diff);
    return (
      <div className="Buttons">
        <Button label="Cancel" callback={this.cancel} active={active} />
        <Button label="Accept" callback={this.accept} active={active} />
      </div>
    );
  };

  render = () => (
    <div className="ResourceManager">
      {this.drawCounters()}
      {this.drawText()}
      {this.drawButtons()}
    </div>
  );
}

export default ResourceManager;
