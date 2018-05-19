import React from 'react';
import Graph from './Graph.js';

it('renders grid with 25 elements and 6 columns', () => {
    let graph = new Graph(25, 6);

    expect(graph.nodes.length).toBe(5);
    expect(graph.nodes[4].length).toBe(1);
});

it('renders grid with 5 elements and 1 column', () => {
    let graph = new Graph(5, 5);

    expect(graph.nodes.length).toBe(1);
    expect(graph.nodes[0].length).toBe(5);
});

it('renders grid with 10 elements and 2 columns', () => {
    let graph = new Graph(10, 2);

    expect(graph.nodes.length).toBe(5);
    expect(graph.nodes[0].length).toBe(2);
});

it('gets list of vertices', () => {
    let graph = new Graph(2, 2);

    // console.log(graph.listVertices());
});

it('it gets adjacent node when node is at the top left', () => {
    let graph = new Graph(25, 5);

    let adjacent = graph.adjacentNodes({row: 0, column: 0});

    expect(adjacent).toEqual([{row: 0, column: 1}, {row: 1, column: 0}]);
});

it('it gets adjacent nodes for middle node', () => {
    let graph = new Graph(25, 5);

    let adjacent = graph.adjacentNodes({row: 1, column: 1});

    expect(adjacent).toEqual([{column: 2, row: 1}, {column: 1, row: 2}, {column: 1, row: 0}, {column: 0, row: 1}]);
});

it('it gets adjacent nodes for bottom right', () => {
    let graph = new Graph(25, 5);

    let adjacent = graph.adjacentNodes({row: 4, column: 4});

    expect(adjacent).toEqual([{column: 4, row: 3}, {column: 3, row: 4}]);
});
