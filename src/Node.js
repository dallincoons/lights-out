import React, { Component } from 'react';

class Node extends Component {
    toggleNode = () => {
        this.props.toggleNode(this.props.coordinates);
    };

    render() {
        return (
            <div className="game-node" onClick={this.toggleNode}>
                on: {this.props.isOn ? 'true' : 'false'}
            </div>
        )
    }
}

export default Node;
