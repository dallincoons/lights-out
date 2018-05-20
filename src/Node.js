import React, { Component } from 'react';

class Node extends Component {
    toggleNode = () => {
        this.props.toggleNode(this.props.coordinates);
    };

    render() {
        let classNames = this.props.isOn ? 'isOn' : 'isOff';
        classNames += ' game-node';
        
        return (
            <div className={classNames} onClick={this.toggleNode}>
            </div>
        )
    }
}

export default Node;
