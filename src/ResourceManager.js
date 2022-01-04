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

    Increase = resourceName => () => {
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

    Decrease = resourceName => () => {
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

    MakePlusMinusControl = resourceName => (
        <div key={resourceName} className='PlusMinusBox'>
            <div className='ResourcePicture'>
                <img src={`./images/${resourceName}.png`} height="30"/>
            </div>
            <div className='ResourceValue'>
                <h2>
                    {this.state.resources[resourceName]}
                </h2>
            </div>
            <button class='PlusMinusButton' onClick={this.Increase(resourceName)}>
                +
            </button>
            <button class='PlusMinusButton' onClick={this.Decrease(resourceName)}>
                -
            </button>
        </div>
    )

    render = () => (
        <div>
            {
                Object.keys(this.state.resources).map(resource =>
                    this.MakePlusMinusControl(resource)
                )
            }
        </div>
    )
}

export default ResourceManager