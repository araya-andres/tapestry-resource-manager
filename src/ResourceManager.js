import React, { Component } from 'react'

const MIN = 0
const MAX = 8

class ResourceManager extends Component {
    constructor(props) {
        super(props)
        this.state = {
            resources: {...this.props.resources},
        }
    }

    Increase = resourceName => {
        return () => {
            const resources = this.state.resources
            const amount = resources[resourceName]
            if (amount < MAX) {
                this.setState({
                    resources: {
                        ...resources,
                        [resourceName]: amount + 1,
                    },
                })
            }
        }
    }

    Decrease = resourceName => {
        return () => {
            const resources = this.state.resources
            const amount = resources[resourceName]
            if (amount > MIN) {
                this.setState({
                    resources: {
                        ...resources,
                        [resourceName]: amount - 1,
                    },
                })
            }
        }
    }

    render() {
        const resources = this.state.resources
        return (
            <div>
                {
                    Object.keys(resources).map(resource => (
                        <div>
                        <img src={`./images/${resource}.png`} height="20"/>
                        <h2>{resources[resource]}</h2>
                        <button onClick={this.Increase(resource)}>+</button>
                        <button onClick={this.Decrease(resource)}>-</button>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default ResourceManager