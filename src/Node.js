import React, { Component } from 'react';

class Node extends Component {
    toggleNode = () => {
        this.props.toggleNode(this.props.coordinates);
    };

    render() {
        return (
            <div className={this.props.isOn ? 'isOn' : 'isOff'} onClick={this.toggleNode}>
            </div>
        )
    }
}

export default Node;
