import React, { Component } from 'react';
import './App.css';
import Graph from './Graph.js';
import Node from './Node.js';
import update from 'immutability-helper';

class App extends Component {
    state = {
        nodes : {},
    };

    vertices = {};
    listItems = [];

    constructor() {
        super();

        this.vertices = new Graph(25,5).listVertices();

        let nodeState = {'nodes' : {}};
        this.listItems = this.vertices.map((v) => {
            let coordinates = v.coordinates;

            let stateKey = `row:${coordinates.row}column:${coordinates.column}`;
            nodeState[stateKey] = v.isOn;
        });

        this.state = {
            nodes : nodeState
        };
    }

    toggleNode = (coordinates) =>  {
        let stateKey = `row:${coordinates.row}column:${coordinates.column}`;

        const newData = update(this.state.nodes, {
            $toggle: [stateKey]
        });

        this.setState({
            'nodes' : newData
        });
    };

    stateKey(coordinates) {
        return `row:${coordinates.row}column:${coordinates.column}`
    }

    render() {
        return (
          <div className="App">
              {this.vertices.map(v => (
                  <Node key={JSON.stringify(v.coordinates)} coordinates={v.coordinates} isOn={this.state.nodes[this.stateKey(v.coordinates)]} toggleNode={this.toggleNode}/>
              ))}
          </div>
        );
  }
}

export default App;
