import React, { Component } from 'react';
import './App.css';
import Graph from './Graph.js';
import Node from './Node.js';
import update from 'immutability-helper';

class App extends Component {
    state = {};

    vertices = {};
    listItems = [];
    graph;

    constructor() {
        super();

        this.setUpGame();
    }

    setUpGame = () => {
        this.graph = new Graph(25,5);
        this.vertices = this.graph.listVertices();

        let nodeState = {'nodes' : {}};
        this.listItems = this.vertices.map((v) => {
            let coordinates = v.coordinates;

            let stateKey = `row:${coordinates.row}column:${coordinates.column}`;
            nodeState[stateKey] = v.isOn;
        });

        this.state = {
            nodes : nodeState,
            hasWon: false,
            toggleCounter: 0
        };
    };

    toggleNode = (coordinates) =>  {
        let stateKey = this.stateKey(coordinates);

        let adjacencies = this.graph.adjacentNodes(coordinates).map(coordinate => {
            return this.stateKey(coordinate);
        });

        const newData = update(this.state.nodes, {
            $toggle: [stateKey].concat(adjacencies)
        });

        this.setState({
            nodes : newData,
            toggleCounter: this.state.toggleCounter + 1
        }, () => {
            if (this.hasWonGame() ) {
                this.gameWon();
            }
        });
    };

    hasWonGame = () => {
        return !Object.values(this.state.nodes).includes(true);
    };

    gameWon = () => {
        this.setState({
            hasWon : true
        });
    };

    resetGame = () => {
        this.setState({
            hasWon : false,
            toggleCounter: 0
        });
        this.setUpGame();
    };

    giveUp = () => {
        this.setState({
            hasWon : true
        });
    };

    stateKey(coordinates) {
        return `row:${coordinates.row}column:${coordinates.column}`
    }

    render() {
        return (
          <div className="App">
              {!this.state.hasWon ? (
              <div>
                  <button onClick={this.giveUp}>Give Up</button> {this.state.toggleCounter} clicks
                  <div className="play-area">
                      {this.vertices.map(v => (
                          <Node
                            key={JSON.stringify(v.coordinates)}
                            coordinates={v.coordinates}
                            isOn={this.state.nodes[this.stateKey(v.coordinates)]}
                            toggleNode={this.toggleNode}
                          />
                      ))}
                    </div>
                </div>
              ) : (
                <div>
                    <p>you won dude wow</p>
                    <p>You took {this.state.toggleCounter} clicks</p>
                    <button onClick={this.resetGame}>Play Again</button>
                </div>
              )}
          </div>
        );
  }
}

export default App;
